#!/usr/bin/env node
/**
 * Merge every package's coverage/lcov.info (under libs/) into a single
 * coverage/lcov.info at the repo root — the one artifact CI feeds to qlty
 * (`--add coverage/lcov.info`).
 *
 * Normalizes SF: paths to repo-root-relative (jest/vitest report paths
 * relative to the package; cargo-llvm-cov reports absolute paths), and
 * merges duplicate source files by summing hit counts.
 */
import { readdirSync, readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, isAbsolute, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));

const found = readdirSync(join(ROOT, 'libs'), { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => ({ pkg: `libs/${d.name}`, file: join(ROOT, 'libs', d.name, 'coverage', 'lcov.info') }))
  .filter((e) => existsSync(e.file));

if (!found.length) {
  console.error('merge-lcov: no libs/*/coverage/lcov.info found — run `pnpm run test:cov` first');
  process.exit(1);
}

/** sf -> { da:Map<line,hits>, fn:Map<name,line>, fda:Map<name,hits>, br:Map<key,taken> } */
const merged = new Map();

function record(sf) {
  if (!merged.has(sf))
    merged.set(sf, { da: new Map(), fn: new Map(), fda: new Map(), br: new Map() });
  return merged.get(sf);
}

for (const { pkg, file } of found) {
  let rec = null;
  for (const raw of readFileSync(file, 'utf8').split('\n')) {
    const line = raw.trim();
    if (!line || line === 'TN:' || line.startsWith('TN:')) continue;
    const [tag, rest] = [line.slice(0, line.indexOf(':')), line.slice(line.indexOf(':') + 1)];
    switch (tag) {
      case 'SF': {
        const p = rest;
        rec = record(isAbsolute(p) ? relative(ROOT, p) : join(pkg, p));
        break;
      }
      case 'DA': {
        const [l, h] = rest.split(',');
        rec.da.set(+l, (rec.da.get(+l) || 0) + (+h || 0));
        break;
      }
      case 'FN': {
        const [l, name] = rest.split(',');
        rec.fn.set(name, +l);
        if (!rec.fda.has(name)) rec.fda.set(name, 0);
        break;
      }
      case 'FNDA': {
        const [h, name] = rest.split(',');
        rec.fda.set(name, (rec.fda.get(name) || 0) + (+h || 0));
        break;
      }
      case 'BRDA': {
        const [block, l, branch, taken] = rest.split(',');
        const key = `${block}:${l}:${branch}`;
        rec.br.set(key, Math.max(rec.br.get(key) || 0, taken === '-' ? 0 : +taken || 0));
        break;
      }
      // LF/LH/FNF/FNH/BRF/BRH/end_of_record: recomputed at the end
    }
  }
}

const out = [];
let totLF = 0,
  totLH = 0;
for (const sf of [...merged.keys()].sort()) {
  const r = merged.get(sf);
  const das = [...r.da.keys()].sort((a, b) => a - b);
  const lh = das.filter((l) => r.da.get(l) > 0).length;
  totLF += das.length;
  totLH += lh;
  const fns = [...r.fn.entries()].sort((a, b) => a[1] - b[1] || (a[0] < b[0] ? -1 : 1));
  const fnh = fns.filter(([n]) => (r.fda.get(n) || 0) > 0).length;
  const brs = [...r.br.keys()].sort();
  const brh = brs.filter((k) => r.br.get(k) > 0).length;
  out.push('TN:');
  out.push(`SF:${sf}`);
  for (const [name, l] of fns) out.push(`FN:${l},${name}`);
  for (const [name, h] of fns.map(([n, l]) => [n, r.fda.get(n) || 0])) out.push(`FNDA:${h},${name}`);
  out.push(`FNF:${fns.length}`);
  out.push(`FNH:${fnh}`);
  for (const k of brs) {
    const [block, l, branch] = k.split(':');
    const t = r.br.get(k);
    out.push(`BRDA:${block},${l},${branch},${t > 0 ? t : '-'}`);
  }
  out.push(`BRF:${brs.length}`);
  out.push(`BRH:${brh}`);
  for (const l of das) out.push(`DA:${l},${r.da.get(l)}`);
  out.push(`LF:${das.length}`);
  out.push(`LH:${lh}`);
  out.push('end_of_record');
}

mkdirSync(join(ROOT, 'coverage'), { recursive: true });
writeFileSync(join(ROOT, 'coverage', 'lcov.info'), out.join('\n') + '\n');
console.log(
  `merge-lcov: ${found.length} reports, ${merged.size} source files → coverage/lcov.info ` +
    `(${totLH}/${totLF} lines = ${((100 * totLH) / totLF).toFixed(1)}%)`,
);
