import { EventEmitter } from 'events';
import { ObjectReadableMock } from 'stream-mock';
import { f, isFluentAsyncIterable, isFluentIterable } from '../src';
import expect from './tools';

describe(f.name, () => {
  it('should transform an object in a iterable which iterates over its entries', () => {
    const iterable = f({ a: 1, b: 2, c: 3 });

    expect(isFluentIterable(iterable)).to.be.true;
    expect(iterable.toArray()).to.be.eql([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });

  it('should iterate synchronous over an iterable', () => {
    const iterable = f([1, 2, 3]);

    expect(isFluentIterable(iterable)).to.be.true;
    expect(iterable.toArray()).to.be.eql([1, 2, 3]);
  });

  it('should iterate asynchronous over an async iterable', async () => {
    const iterable = f(new ObjectReadableMock([1, 2, 3]));

    expect(isFluentAsyncIterable(iterable)).to.be.true;
    expect(await iterable.toArray()).to.be.eql([1, 2, 3]);
  });

  it('should iterate asynchronous over an EventEmitter', async () => {
    const emitter = new EventEmitter();

    const iterable = f(emitter);

    emitter.emit('data', 1);
    emitter.emit('data', 2);
    emitter.emit('data', 3);
    emitter.emit('close');

    expect(isFluentAsyncIterable(iterable)).to.be.true;
    expect(await iterable.toArray()).to.be.eql([1, 2, 3]);
  });

  it('should iterate asynchronous over an EventEmitter with custom options', async () => {
    const emitter = new EventEmitter();

    const iterable = f(emitter, {
      event: 'take',
      end: ['finish'],
    });

    emitter.emit('take', 1);
    emitter.emit('take', 2);
    emitter.emit('take', 3);
    emitter.emit('finish');

    expect(isFluentAsyncIterable(iterable)).to.be.true;
    expect(await iterable.toArray()).to.be.eql([1, 2, 3]);
  });
});
