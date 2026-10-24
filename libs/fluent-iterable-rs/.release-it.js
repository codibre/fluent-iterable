// Release-it config for the Rust crate — same driver as every TS subproject,
// different publish command (the "custom:publish" seam the base config opens
// via hooks). Version selection stays conventional-commit/path-scoped: only
// feat|fix commits touching libs/fluent-iterable-rs since the last
// fluent-iterable-rs@<v> tag trigger a release; the recommended bump
// (feat→minor, fix→patch on 0.x) writes package.json, then the hook syncs
// Cargo.toml and publishes the crate to crates.io. Release-it commits and
// tags (fluent-iterable-rs@<version> via the base tagName) exactly like the
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
    "after:bump": "bash scripts/cargo-publish.sh",
  },
};
