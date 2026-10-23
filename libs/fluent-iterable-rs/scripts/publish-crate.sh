#!/usr/bin/env bash
# Publish this crate to crates.io — manifest-driven:
#   the version in Cargo.toml IS the release request.
# Merged to master with a version higher than crates.io's latest => publish
# and tag `fluent-iterable-rs@<version>`. Equal => nothing to do (idempotent
# re-runs, workflow_dispatch included). Lower => the manifest is stale, fail.
#
#   modes:  --lint      version files in sync, no network (runs in turbo lint)
#           --check     + compare against crates.io, no cargo
#           --dry-run   + cargo publish --dry-run
#           (default)   publish + tag (PUSH_GIT=1 also pushes the tag)
#
# Auth: cargo reads CARGO_REGISTRY_TOKEN from the environment natively; it is
# only consulted when there is actually something to publish.
set -euo pipefail
cd "$(dirname "$0")/.."

MODE="${1:---publish}"
CRATE_NAME=$(sed -n 's/^name = "\([^"]*\)"/\1/p' Cargo.toml | head -1)
CARGO_V=$(sed -n 's/^version = "\([^"]*\)"/\1/p' Cargo.toml | head -1)
PKG_V=$(node -p "require('./package.json').version")

fail() { echo "::error::$*" >&2; exit 1; }

# --- sync gate (all modes) ---
[ "$CARGO_V" = "$PKG_V" ] || fail "version drift: Cargo.toml=$CARGO_V package.json=$PKG_V — run scripts/set-version.sh $CARGO_V"
if [ "$MODE" = "--lint" ]; then echo "versions in sync: $CARGO_V"; exit 0; fi

# --- what does crates.io have? ---
latest=$(curl -fsS --max-time 30 -A 'fluent-iterable-rs-ci (codibre/fluent-iterable)' \
  "https://crates.io/api/v1/crates/$CRATE_NAME" \
  | sed -n 's/.*"max_version":"\([^"]*\)".*/\1/p')
[ -n "$latest" ] || fail "could not read crates.io latest version for $CRATE_NAME"

lower=$(printf '%s\n%s\n' "$CARGO_V" "$latest" | sort -V | head -1)
if [ "$CARGO_V" = "$latest" ]; then
  echo "crates.io already has $CRATE_NAME@$latest — nothing to publish"
  exit 0
fi
if [ "$lower" = "$CARGO_V" ]; then
  fail "Cargo.toml version $CARGO_V is BEHIND crates.io latest $latest — bump it (scripts/set-version.sh) or this branch is stale"
fi
echo "pending publish: $CRATE_NAME@$CARGO_V (crates.io latest: $latest)"
if [ "$MODE" = "--check" ]; then exit 0; fi

[ "$MODE" = "--dry-run" ] || {
  [ -n "${CARGO_REGISTRY_TOKEN:-}" ] || fail "CARGO_REGISTRY_TOKEN is empty — set the repository secret to let CI publish $CRATE_NAME@$CARGO_V"
}

echo ">>> cargo publish ($MODE)"
if [ "$MODE" = "--dry-run" ]; then
  cargo publish --dry-run
else
  cargo publish
  # tag under the pnpm bridge name (matches the repo's <pkg>@<version> scheme)
  if ! git rev-parse -q --verify "refs/tags/fluent-iterable-rs@$CARGO_V" >/dev/null; then
    git tag -a "fluent-iterable-rs@$CARGO_V" -m "crates.io release $CRATE_NAME@$CARGO_V"
    if [ "${PUSH_GIT:-0}" = "1" ]; then
      git push origin "fluent-iterable-rs@$CARGO_V"
    else
      echo "tagged locally: fluent-iterable-rs@$CARGO_V (PUSH_GIT=1 to push)"
    fi
  fi
  echo "published $CRATE_NAME@$CARGO_V to crates.io"
fi
