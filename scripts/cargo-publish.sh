#!/usr/bin/env bash
# release-it `after:bump` hook for the -rs bridges (shared by every Rust
# crate in the repo). Run from the crate directory — package.json was just
# bumped by release-it (conventional commits scoped to this directory);
# mirror that version into Cargo.toml and publish the crate to crates.io.
# Auth = the OIDC-minted CARGO_REGISTRY_TOKEN placed in the workflow step env
# by rust-lang/crates-io-auth-action (trusted publishing; cargo reads this
# variable natively). Release-it commits the synced Cargo.toml and creates the
# <bridge-name>@<version> tag right after.
set -euo pipefail

V=$(node -p "require('./package.json').version")
bash "$(cd "$(dirname "$0")" && pwd)/set-version.sh" "$V"

if [ -z "${CARGO_REGISTRY_TOKEN:-}" ]; then
  echo "::error::CARGO_REGISTRY_TOKEN is empty — the OIDC exchange failed. Check the crates.io Trusted Publishing config (owner codibre / repo fluent-iterable / workflow publish.yaml)." >&2
  exit 1
fi

# --allow-dirty: at hook time the bumped files are uncommitted by design;
# the working tree IS the release content release-it is about to commit.
cargo publish --allow-dirty
CRATE=$(sed -n 's/^name = "\([^"]*\)"/\1/p' Cargo.toml | head -1)
BRIDGE=$(node -p "require('./package.json').name")
echo "published $CRATE@$V to crates.io (release-it will tag $BRIDGE@$V)"
