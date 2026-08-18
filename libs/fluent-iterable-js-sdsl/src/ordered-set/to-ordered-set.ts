import { BinarySearchTreeSet } from './binary-search-tree-set';
import { toOrderedContainerFactory } from '../utils/to-ordered-container-factory';

export const toOrderedSet = toOrderedContainerFactory(
	(cmp) => new BinarySearchTreeSet(cmp),
	'insert',
);
