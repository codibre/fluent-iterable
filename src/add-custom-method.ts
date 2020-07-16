/* eslint-disable guard-for-in */

import { ProxyReference } from 'extension-methods';
import fluent from './fluent';
import { iterateObjProps } from './utils';

export function addCustomMethod(
  proxyReference: ProxyReference,
  methods: { [name: string]: Function },
) {
  if (
    fluent(iterateObjProps(methods)).any(
      proxyReference.hasOwnProperty.bind(proxyReference),
    )
  ) {
    throw new Error(`There is already a method called ${name}`);
  }
  Object.assign(proxyReference, methods);
}
