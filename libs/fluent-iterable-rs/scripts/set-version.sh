#!/usr/bin/env bash
# Sync the crate version across Cargo.toml + package.json. Both must match:
# crates.io reads Cargo.toml; pnpm/turbo (and the CI filter) see package.json.
#   usage: pnpm --filter fluent-iterable-rs version:set 0.1.0
set -euo pipefail
cd "$(dirname "$0")/.."
V="${1:?usage: set-version.sh <x.y.z>}"
if ! printf '%s' "$V" | grep -qE '^[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z.-]+)?$'; then
  echo "not a semver version: $V" >&2
  exit 1
fi
sed -i "0,/^version = \"[^\"]*\"/s//version = \"$V\"/" Cargo.toml
node -e '
  const fs = require("fs");
  const p = JSON.parse(fs.readFileSync("package.json", "utf8"));
  p.version = process.argv[1];
  fs.writeFileSync("package.json", JSON.stringify(p, null, 2) + "\n");
' "$V"
echo "Cargo.toml:  $(grep -m1 '^version' Cargo.toml)"
echo "package.json: $(node -p "require('./package.json').version")"
