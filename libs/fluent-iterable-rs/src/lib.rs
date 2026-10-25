//! Crate documentation lives in README.md — one source of truth for
//! crates.io, docs.rs and this page.
#![doc = include_str!("../README.md")]

use std::cmp::Ordering;
use std::collections::{HashMap, HashSet};
use std::fmt::Display;
use std::hash::Hash;

pub mod ops;

pub use ops::combining::Combine;
pub use ops::distinct::{Distinct, DistinctBy};
use ops::fallback::WhenEmptyPhase;
pub use ops::fallback::{Repeat, WhenEmpty};

include!("fluent_iter.rs");

impl<I: Iterator> FluentIter for I {}
