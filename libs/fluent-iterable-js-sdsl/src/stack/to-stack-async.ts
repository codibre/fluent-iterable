import { toPushableAsyncFactory } from '../utils/to-pushable-async-factory';
import { IterableStack } from './iterable-stack';

export const toStackAsync = toPushableAsyncFactory(IterableStack);
