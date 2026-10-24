//! Streaming adapter structs behind the lazy operations. Each adapter
//! keeps its `Iterator` implementation right next to itself.

pub mod combining;
pub mod distinct;
pub mod fallback;
