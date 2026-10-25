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
