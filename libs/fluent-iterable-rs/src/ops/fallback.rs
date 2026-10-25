//! Adapters for the fallback operations.

/// Fallback adapter behind [`FluentIter::when_empty`].
#[derive(Debug)]
pub struct WhenEmpty<I, F>
where
    I: Iterator,
    F: IntoIterator<Item = I::Item>,
{
    pub(crate) phase: WhenEmptyPhase<I, F::IntoIter>,
    pub(crate) fallback: Option<F>,
}

#[derive(Debug)]
pub(crate) enum WhenEmptyPhase<S, T> {
    /// Still pulling from the source; flag remembers whether it yielded yet.
    Source(S, bool),
    /// Source ran out without yielding: draining the fallback.
    Fallback(T),
    /// Done — `Iterator::next` must keep returning `None`.
    Done,
}

impl<I, F> Iterator for WhenEmpty<I, F>
where
    I: Iterator,
    F: IntoIterator<Item = I::Item>,
{
    type Item = I::Item;

    #[inline]
    fn next(&mut self) -> Option<I::Item> {
        match &mut self.phase {
            WhenEmptyPhase::Source(source, yielded) => match source.next() {
                Some(item) => {
                    *yielded = true;
                    Some(item)
                }
                None => {
                    if *yielded {
                        self.phase = WhenEmptyPhase::Done;
                        return None;
                    }
                    match self.fallback.take() {
                        Some(fallback) => {
                            let mut iter = fallback.into_iter();
                            let item = iter.next();
                            self.phase = WhenEmptyPhase::Fallback(iter);
                            item
                        }
                        None => {
                            self.phase = WhenEmptyPhase::Done;
                            None
                        }
                    }
                }
            },
            WhenEmptyPhase::Fallback(iter) => iter.next(),
            WhenEmptyPhase::Done => None,
        }
    }
}
/// Finite repetition adapter behind [`FluentIter::repeat`].
///
/// Items are `Copy` handles: the cache retains pointers (for reference
/// streams), never payload copies — every pass yields handles to the
/// same originals, exactly like the JS side replaying the same object
/// references. The first pass streams the source while caching (skipped
/// entirely when `times == 1` — the cache stays empty); passes 2..=n
/// replay it. With `times == 0` the source is never consumed at all.
#[derive(Debug)]
pub struct Repeat<I: Iterator>
where
    I::Item: Copy,
{
    pub(crate) source: I,
    pub(crate) cache: Vec<I::Item>,
    pub(crate) times: usize,
    /// 0 while streaming the first pass, then the replay round index.
    pub(crate) round: usize,
    pub(crate) pos: usize,
}

impl<I> Iterator for Repeat<I>
where
    I: Iterator,
    I::Item: Copy,
{
    type Item = I::Item;

    #[inline]
    fn next(&mut self) -> Option<I::Item> {
        if self.times == 0 {
            return None;
        }
        loop {
            if self.round == 0 {
                if let Some(item) = self.source.next() {
                    if self.times > 1 {
                        // A handle bit-copy; the object is never copied.
                        self.cache.push(item);
                    }
                    return Some(item);
                }
                self.round = 1;
                self.pos = 0;
            }
            if self.round >= self.times {
                return None;
            }
            if let Some(item) = self.cache.get(self.pos).copied() {
                self.pos += 1;
                return Some(item);
            }
            self.round += 1;
            self.pos = 0;
        }
    }
}
