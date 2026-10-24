/// The missing combinators of [`std::iter::Iterator`], in the
/// [`@codibre/fluent-iterable`] vocabulary (see the [crate docs](crate) for
/// the full npm ⇄ Rust map).
///
/// Blanket-implemented for every iterator — just `use fluent_iterable::FluentIter;`.
///
/// ## Laziness model
///
/// Streaming adapters are reserved for operations where laziness *can pay*:
/// [`distinct`][FluentIter::distinct], [`distinct_by`][FluentIter::distinct_by]
/// and [`combine`][FluentIter::combine] short-circuit under `take(k)` and
/// never buffer the sequence. Operations whose *first result is not final
/// until the whole source has been read* — [`group_by_stable`][FluentIter::group_by_stable],
/// [`combine_join`][FluentIter::combine_join] and the sort family — are
/// inherently O(N) and resolve to a solid [`Vec`] right away: a lazy wrapper
/// over a full pass would consume the same source and store the same
/// results, while losing re-iterability and every `Vec` method. Chaining
/// still works (`Vec` is an `IntoIterator`); terminals (`avg`, `join`,
/// `to_map*`, `has_*`, …) return plain values like npm does.
pub trait FluentIter: Iterator + Sized {
