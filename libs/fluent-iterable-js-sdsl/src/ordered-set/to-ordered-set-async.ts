import { BinarySearchTreeSet } from './binary-search-tree-set';
import { toOrderedContainerAsyncFactory } from '../utils/to-ordered-container-async-factory';

export const toOrderedSetAsync = toOrderedContainerAsyncFactory(
	(cmp) => new BinarySearchTreeSet(cmp),
	'insert',
);
