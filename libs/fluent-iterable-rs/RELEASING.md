# Releasing `fluent-iterable` (crates.io)

The crate releases itself the same way the TS siblings do: **conventional
commits touching `libs/fluent-iterable-rs`** are the release trigger. On
merge to `master`, the publish pipeline runs release-it here — the shared
`.release-it.base.js` gate looks for `feat`/`fix` commits under this path
since the last `fluent-iterable-rs@<v>` tag (silent skip otherwise), the
conventional preset picks the next version (`strictSemVer`: feat→1.0.0 from
0.x, fix→patch), and the `.release-it.js` hook (`scripts/cargo-publish.sh`)
mirrors the new version into `Cargo.toml` and publishes the crate to
crates.io. The same release-it run commits and tags — so the crate shows up
in the workflow's Published/Skipped summary alongside the npm packages.

Auth is **trusted publishing (OIDC)**: `rust-lang/crates-io-auth-action`
exchanges the workflow identity for a 30-minute crates.io token — no API
token stored anywhere. One-time setup (crate owner, on crates.io): crate
**Settings → Trusted Publishing → Add (GitHub)**, owner `codibre`,
repository `fluent-iterable`, workflow filename `publish.yaml`, environment
empty.

Manual escape hatch: `cargo publish` from this directory (needs `cargo
login` locally); `pnpm run publish:check` / `publish:dry` preview state
against crates.io, `version:set` force-syncs both manifests.
