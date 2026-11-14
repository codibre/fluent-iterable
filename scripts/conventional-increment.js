#!/usr/bin/env node
'use strict';
// Per-package conventional-commit increment for the libs/ monorepo.
//
// Why this exists: @release-it/conventional-changelog computes the recommended
// bump from EVERY commit in <lastTag>..HEAD, ignoring file paths — so one
// subproject's BREAKING CHANGE bumps every sibling to a major. That shipped
// @codibre/fluent-iterable@2.0.0 (and would have shipped rxjs 2.0.0) on the
// strength of the Rust crate's breaking commit alone. release-it's plugin gets
// the same scoping natively via `commitsOpts.path`; this script is the gate
// half — the single decision both the pre-check in .release-it.base.js and
// humans can consult — and it mirrors the conventionalcommits preset:
//
//   BREAKING CHANGE footer or `!` before the colon  -> major
//   feat:                                           -> minor
//   fix: / perf:                                    -> patch
//   anything else (docs, test, ci, chore, revert, merges) -> no release
//
// The spec is literal: a footer "BREAKING CHANGE: none" STILL means major.
// Do not write one to mean "nothing breaking".
const { execFileSync } = require('child_process');
const path = require('path');

const HEADER = /^(\w+)(?:\(([^)]*)\))?(!)?:/;
const BREAKING_FOOTER = /^BREAKING[ -]CHANGE(?![\w-])/m;
const RANK = { patch: 1, minor: 2, major: 3 };

// Full commit message -> 'major' | 'minor' | 'patch' | null.
function classifyMessage(msg) {
  // A BREAKING footer outranks any type, even fix/perf.
  if (BREAKING_FOOTER.test(msg)) return 'major';
  const m = HEADER.exec(msg.split('\n', 1)[0]);
  if (!m) return null;
  if (m[3]) return 'major'; // `feat!:` / `chore!:`
  const type = m[1].toLowerCase();
  if (type === 'feat') return 'minor';
  if (type === 'fix' || type === 'perf') return 'patch';
  return null;
}

function latestTag(pkgDir, pkgName) {
  try {
    return execFileSync(
      'git',
      ['describe', '--tags', `--match=${pkgName}@*`, '--abbrev=0'],
      { cwd: pkgDir, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim();
  } catch (e) {
    // 128: no tag matched (first release for this package). Anything else is
    // a real git failure — propagate instead of silently releasing the world.
    if (e.status !== 128) throw e;
    return null;
  }
}

// Non-merge commits between the package's last release tag (or the whole
// history when there is none) and HEAD that touch the package directory.
function packageCommits(pkgDir, tag) {
  const range = tag ? `${tag}..HEAD` : 'HEAD';
  const out = execFileSync('git', ['log', '--no-merges', '--format=%B%x00', range, '--', '.'], {
    cwd: pkgDir,
    encoding: 'utf8',
  });
  return out.split('\0').map((s) => s.trim()).filter(Boolean);
}

// pkgDir -> { pkgName, tag, increment: 'major'|'minor'|'patch'|null }
function computeIncrement(pkgDir) {
  const pkgName = require(path.resolve(pkgDir, 'package.json')).name;
  const tag = latestTag(pkgDir, pkgName);
  let increment = null;
  for (const msg of packageCommits(pkgDir, tag)) {
    const k = classifyMessage(msg);
    if (k && (!increment || RANK[k] > RANK[increment])) increment = k;
  }
  return { pkgName, tag, increment };
}

if (require.main === module) {
  const dir = path.resolve(process.argv[2] || '.');
  const { pkgName, tag, increment } = computeIncrement(dir);
  if (process.env.INCREMENT_VERBOSE) {
    console.error(`[conventional-increment] ${pkgName}: ${increment || 'none'} (${tag || 'full history'}..HEAD, path-scoped)`);
  }
  console.log(increment || 'none');
}

module.exports = { classifyMessage, computeIncrement };
