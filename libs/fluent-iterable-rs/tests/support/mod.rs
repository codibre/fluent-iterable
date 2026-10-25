//! Shared test helpers — available to every integration-test binary
//! via `mod support;`.
#![allow(dead_code)]

use std::cell::Cell;
use std::rc::Rc;

/// Counts how many items the wrapped iterator ever yielded — proof of
/// short-circuiting for the lazy/terminal checks.
pub struct Counting<I: Iterator> {
    inner: I,
    yielded: Rc<Cell<usize>>,
}

impl<I: Iterator> Iterator for Counting<I> {
    type Item = I::Item;
    fn next(&mut self) -> Option<I::Item> {
        let item = self.inner.next();
        if item.is_some() {
            self.yielded.set(self.yielded.get() + 1);
        }
        item
    }
}

pub fn counting<I: Iterator>(inner: I) -> (Counting<I>, Rc<Cell<usize>>) {
    let counter = Rc::new(Cell::new(0));
    (
        Counting {
            inner,
            yielded: Rc::clone(&counter),
        },
        counter,
    )
}

/// Clone-counting payload — proof that move handoffs really skip the
/// clone (the `Rc` keeps the clones cheap; the counter is the point).
#[derive(Debug)]
pub struct CountedClone {
    pub id: u64,
    blob: Rc<[u8; 64]>,
    counter: Rc<Cell<usize>>,
}

// Identity is the id: clones of the same entity must compare and hash
// equal (blob/counter are bookkeeping, not identity) — this lets
// distinct() run on CountedClone payloads.
impl PartialEq for CountedClone {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id
    }
}
impl Eq for CountedClone {}
impl std::hash::Hash for CountedClone {
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        self.id.hash(state);
    }
}

impl Clone for CountedClone {
    fn clone(&self) -> Self {
        self.counter.set(self.counter.get() + 1);
        Self {
            id: self.id,
            blob: Rc::clone(&self.blob),
            counter: Rc::clone(&self.counter),
        }
    }
}

/// `n` items with ids `0..n`, plus the `clone()` counter they share.
pub fn counted_items(n: usize) -> (Rc<Cell<usize>>, Vec<CountedClone>) {
    let counter = Rc::new(Cell::new(0));
    let items = (0..n as u64)
        .map(|id| CountedClone {
            id,
            blob: Rc::new([0; 64]),
            counter: Rc::clone(&counter),
        })
        .collect();
    (counter, items)
}
