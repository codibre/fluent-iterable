// Release-it config for the fluent-lazy-structures crate — same driver as
// every TS subproject, different publish command (the "custom:publish" seam
// the base config opens via hooks). Version selection stays
// conventional-commit/path-scoped: only commits touching
// libs/fluent-lazy-structures-rs since the last fluent-lazy-structures-rs@<v>
// tag trigger a release (rules: scripts/conventional-increment.js); the
// recommended bump (feat→minor, fix→patch on 0.x) writes package.json, then
// the shared root hook (scripts/cargo-publish.sh) syncs Cargo.toml and
// publishes the crate to crates.io. Release-it commits and tags
// (fluent-lazy-structures-rs@<version> via the base tagName) exactly like the
// npm siblings — so this package shows up in the workflow's Published/Skipped
// summary too.
const baseConfig = require("../../.release-it.base.js");

module.exports = {
  ...baseConfig,
  hooks: {
    // runs right after bump rewrites package.json and before the release
    // commit — the synced Cargo.toml lands in the same commit. --allow-dirty
    // is required: the bumped files are uncommitted at hook time; the tree
    // content IS what gets published, and release-it commits it next.
    "after:bump": "bash ../../scripts/cargo-publish.sh",
  },
};
