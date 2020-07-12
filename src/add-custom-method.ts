/* eslint-disable guard-for-in */

import { ProxyReference } from 'extension-methods';

export function addCustomMethod(
  proxyReference: ProxyReference,
  methods: { [name: string]: Function },
) {
  for (const name in methods) {
    if (proxyReference.hasOwnProperty(name)) {
      throw new Error(`There is already a method called ${name}`);
    }
  }
  Object.assign(proxyReference, methods);
}
