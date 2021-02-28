import { AsyncMapper, Mapper } from 'augmentative-iterable';

export type AsyncCatchCallback = Mapper<any, void | Promise<void>>;
export type CatchCallback = Mapper<any, void>;
