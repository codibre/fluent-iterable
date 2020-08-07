import { concatAsync } from '../async';
import { getBaseEmittingConversion } from './base-emitting-conversion';

export const concatEmitter = getBaseEmittingConversion(concatAsync);
