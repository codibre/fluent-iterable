const { computeIncrement } = require("./scripts/conventional-increment.js");

// Gate: only continue when commits touching THIS package's directory, since
// its own last release tag, warrant a release. release-it's conventional
// bump is scoped natively via `commitsOpts.path` below; this script mirrors
// the same rules so the skip is fast, explicit, and log-friendly.
let pkgName, tag, increment;
try {
  ({ pkgName, tag, increment } = computeIncrement(process.cwd()));
} catch (e) {
  console.error("[release-it] Pre-check failed. Aborting to prevent false bumps.\nError:", e.message || e);
  process.exit(1);
}

if (!increment) {
  const timeframe = tag ? `since ${tag}` : "in history";
  console.log(`\n\x1b[33m[release-it] No feat/fix/perf or BREAKING CHANGE commits touching ${pkgName}'s directory ${timeframe}. Skipping release.\x1b[0m\n`);
  process.exit(0);
}

console.log(`[release-it] ${pkgName}: ${increment} bump (${tag || "full history"}..HEAD, path-scoped)`);

// Shared configuration for every libs/* package.
module.exports = {
  "$schema": "https://unpkg.com/release-it@19/schema/release-it.json",
  "git": {
    "tagName": `${pkgName}@\${version}`,
    "tagMatch": `${pkgName}@*`,
    "commitMessage": `chore(${pkgName}): release v\${version} [skip ci]`,
    "requireCleanWorkingDir": false,
    "commitsPath": ".",
    "push": true,
    "pushRepo": "origin"
  },
  "npm": {
    "publish": false,
    "skipChecks": true
  },
  "github": {
    "release": false
  },
  "hooks": {
    "after:bump": "pnpm publish --no-git-checks --provenance"
  },
  "plugins": {
    "@release-it/conventional-changelog": {
      "preset": {
        "name": "conventionalcommits",
        "types": [
          { "type": "feat", "section": "Features" },
          { "type": "fix", "section": "Bug Fixes" }
        ]
      },
      "parserOpts": {
        "headerPattern": /^(\w+)(?:\((.*)\))?!?: (.*)$/,
        "headerCorrespondence": ["type", "scope", "subject"]
      },
      "infile": "CHANGELOG.md",
      "ignoreRecommendedBump": false,
      "strictSemVer": true,
      // Scope the RECOMMENDED BUMP to this directory: without it the plugin
      // feeds every commit in <lastTag>..HEAD to conventional-recommended-bump
      // and another subproject's BREAKING CHANGE forces a major here.
      "commitsOpts": {
        "path": "."
      },
      // Same scoping for the rendered changelog.
      "gitRawCommitsOpts": {
        "path": "."
      }
    }
  }
};
