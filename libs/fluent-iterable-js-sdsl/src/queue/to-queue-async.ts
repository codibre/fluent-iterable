import { IterableQueue } from './iterable-queue';
import { toPushableAsyncFactory } from '../utils/to-pushable-async-factory';

export const toQueueAsync = toPushableAsyncFactory(IterableQueue);
