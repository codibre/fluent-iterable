import { getExtender, defaultCookFunction } from 'extension-methods';
export const proxyReference: { [key: string]: Function } = {};
export const syncHandler = getExtender(
  proxyReference as any,
  defaultCookFunction,
  'extender',
);
