import { merge } from '../async-base';
import { getBaseEmittingConversion } from './base-emitting-conversion';

export const mergeEmitter = getBaseEmittingConversion(merge);
