import { toOrderedContainerAsyncFactory } from '../utils/to-ordered-container-async-factory';
import { IterablePriorityQueue } from './iterable-priority-queue';

export const toPriorityQueueAsync = toOrderedContainerAsyncFactory(
	(cmp) => new IterablePriorityQueue([], cmp),
	'push',
);
