import { IterableQueue } from './iterable-queue';
import { toPushableFactory } from '../utils/to-pushable-factory';

export const toQueue = toPushableFactory(IterableQueue);
