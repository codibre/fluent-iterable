import fluent from '../fluent';

export * from './assure-order-types';
export * from './catch-callback';
export * from './base';
export * from './base';
export * from './base';
export * from './emitter';
export * from './fluent-async-iterable';
export * from './fluent-iterable';
export * from './iterator-catch-result';
export * from './truthy';

const categories = [
  {
    id: 1,
    description: 'books',
  },
  {
    id: 2,
    description: 'movies',
  },
  {
    id: 2,
    description: 'magazines',
  },
];

const categoriesDictionary = fluent(categories).toObject('id', 'description');
