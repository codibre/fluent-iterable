# Changelog

## [1.0.0](https://github.com/codibre/fluent-iterable/compare/v1.40.0...%24%7Bnpm.name%7D%401.0.0) (2026-10-24)

### ⚠ BREAKING CHANGES

* group_by_stable, combine, combine_join, distinct_by,
  sorted, sort_with, sort_by, sort_by_desc now return iterators — add
  .collect() where a Vec is wanted.

  Also fixes two latent bugs the conversion tests caught in the
  buffering design: the shared phase machine discarded the buffered
  iterator on the second pull (truncation after one element), and the
  join left-walk indexed the hash map with unmatched keys (panic).

  New tests: distinct_by take(2) pulls exactly 3 source items; buffered
  adapters consume nothing until first polled; combine streams the left
  side. npm⇄Rust tables in lib.rs/README updated.

  * fix: pin K into SortBy/CombineJoin so std methods resolve on them

  0.0.2 declared SortBy<I,F>/CombineJoin<I,T,F> with the key type K only
  in the impl header (`impl<I,K,F> Iterator for SortBy<I,F> where F:
  FnMut(&I::Item) -> K`). The compiler accepts it, but downstream
  consumers cannot *select* the impl from the struct type alone, so std
  Iterator methods failed to resolve on those adapters (E0599 on
  `.next()`/`.count()` chains from real call sites).

  Pin K into the struct parameters (PhantomData fn-signature, the same
  shape DistinctBy/GroupByStable/Combine already use): SortBy<I,K,F>,
  CombineJoin<I,T,K,F>.

  Also adds a regression test proving std methods (count/next) resolve
  on every adapter from a bare call site — a lesson worth naming:
  `first` is NOT a std Iterator method (it is inherent to slices), so
  "take the least" spells as sort_by(k).next().copied() in Rust.

  * fix!: full-pass operations resolve; streaming stays where it pays

  Design correction from real-consumer review. Laziness is only useful when
  it changes what the source pays: `take(k)` on `distinct_by` stops pulling
  at the k-th distinct key, and `combine` indexes the right side once and
  walks the left lazily. Those stay adapters.

  `group_by_stable`, `combine_join` and the sort family are different: no
  result is final until the *whole* source has been read (any later element
  can extend the first group or win the sort). A lazy wrapper there runs the
  identical full pass, buffers the identical payload, cannot short-circuit
  `take(k)` — and costs re-iterability plus every Vec method. They now
  resolve immediately:

  - group_by_stable   -> Vec<(K, Vec<Self::Item>)>
  - CombineJoin/fold  -> combine_join -> Vec<Vec<T>>
  - sorted            -> Vec<Self::Item>
  - sort_with         -> Vec<Self::Item>
  - sort_by           -> Vec<Self::Item>   (`.first().copied()` takes the
    least again: Vec's inherent first, since std Iterator has no `first`)
  - sort_by_desc      -> Vec<Self::Item>
* the six operations above return Vec instead of iterator
  adapters; remove trailing `.collect()` at call sites.

  * docs(sort_by): steer "take the least" to std min_by_key, 0.0.5

  The sort_by rustdoc spelled "take the least" as `.sort_by(k).first()
  .copied()` — an O(n log n) sort plus a Vec allocation for what is one
  O(n) pass with std's Iterator::min_by_key/max_by_key. min_by_key also
  documents first-wins on ties, i.e. exactly the JS
  `sortBy(k).first()` semantics over a stable `.sort(k => k)` — so it is
  the parity spelling, not just the faster one.

  Doc-only release; README's skip-table already listed min/max as
  std-provided — the per-method doc now says it where readers are.

  * ci(rs): manifest-driven crates.io publishing in the release pipeline

  The publish workflow skipped the crate (private:true keeps it out of the
  npm loop), so publishing stayed manual. Make it first-class: the version
  in Cargo.toml merged to master IS the release request.

  publish.yaml gains a "Publish Rust crate (crates.io)" step driving
  scripts/publish-crate.sh, which compares Cargo.toml against crates.io:
  higher publishes (+ annotated tag fluent-iterable-rs@<v>, mirroring the
  repo's <pkg>@<version> scheme), equal is an idempotent no-op (re-runs
  and workflow_dispatch included), lower fails as a stale manifest. The
  CARGO_REGISTRY_TOKEN secret is consulted only when a publish is actually
  pending; the SKIP path passes without it.

  Version drift between Cargo.toml and package.json (crates.io reads one,
  turbo sees the other) now fails turbo `lint` — and scripts/set-version.sh
  syncs both in one command, so a release PR is:
    pnpm --filter fluent-iterable-rs version:set 0.0.6

  Tested against live crates.io: sync/lint, equal-skip (0.0.5), pending
  (0.0.6), no-token loud failure, stale (0.0.4) failure, and the real
  `cargo publish --dry-run` leg (aborts at upload as designed).

  * ci(rs): OIDC trusted publishing instead of a stored API token

  rust-lang/crates-io-auth-action exchanges the workflow identity for a
  30-minute crates.io token (cargo reads it via CARGO_REGISTRY_TOKEN,
  the variable the script already honors). continue-on-error on the

### Features

* add libs/fluent-iterable-rs, the Rust port as a zero-dep crate ([#91](https://github.com/codibre/fluent-iterable/issues/91)) ([c5d10df](https://github.com/codibre/fluent-iterable/commit/c5d10dfa927453a17596bbe4d1cb3f0fb4d39f71))
* **rs:** release the crate through the shared release-it pipeline ([#93](https://github.com/codibre/fluent-iterable/issues/93)) ([3e993c1](https://github.com/codibre/fluent-iterable/commit/3e993c1d54810477107031ed8c40ffcb74b76598))

All notable changes to the `fluent-iterable` Rust crate are documented here,
maintained by release-it on every publish.
