import { toOrderedContainerFactory } from '../utils/to-ordered-container-factory';
import { IterablePriorityQueue } from './iterable-priority-queue';

export const toPriorityQueue = toOrderedContainerFactory(
	(cmp) => new IterablePriorityQueue([], cmp),
	'push',
);
