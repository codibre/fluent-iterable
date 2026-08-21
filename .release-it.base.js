const { execSync } = require("child_process");
const path = require("path");

console.log("[DEBUG] .release-it.js is being loaded..."); 

try {
  const pkgPath = path.resolve(process.cwd(), "package.json");
  const pkgName = require(pkgPath).name;
  
  let lastTag = null;
  
  try {
    lastTag = execSync(`git describe --tags --match="${pkgName}@*" --abbrev=0`, { encoding: "utf8", stdio: "pipe" }).trim();
  } catch (e) {
    // 128 indica ausência de tags (primeira release). Qualquer outro erro é propagado.
    if (e.status !== 128) throw e;
  }
  
  // Se não há tag, avalia todo o histórico do diretório (.)
  const logCmd = lastTag 
    ? `git log ${lastTag}..HEAD --oneline -- .` 
    : `git log --oneline -- .`;
    
  const log = execSync(logCmd, { encoding: "utf8", stdio: "pipe" });

  const hasRelevantCommits = /^[a-f0-9]+\s+(feat|fix)(\(.*\))?!?:|BREAKING CHANGE:/m.test(log);

  if (!hasRelevantCommits) {
    const timeframe = lastTag ? `since ${lastTag}` : `in history`;
    console.log(`\n\x1b[33m[release-it] No feat or fix commits found for ${pkgName} ${timeframe}. Skipping release.\x1b[0m\n`);
    process.exit(0); 
  }
} catch (e) {
  console.error("[DEBUG] Pre-check failed. Aborting to prevent false bumps.\nError:", e.message || e);
  process.exit(1);
}

// 2. Configuração padrão
module.exports = {
  "$schema": "https://unpkg.com/release-it@19/schema/release-it.json",
  "git": {
    "tagName": "${npm.name}@${version}",
    "tagMatch": "${npm.name}@*",
    "commitMessage": "chore(${npm.name}): release v${version} [skip ci]",
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
      "path": ".",
      "gitRawCommitsOpts": {
        "path": "."
      },
      "skipOnEmpty": true
    }
  }
};