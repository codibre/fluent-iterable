import base from '../../vitest.config.mts';

// The default threads pool misattributes v8 coverage over the library's CJS
// require chain: files loaded through require() can be registered as two
// script records and the merge drops the branch data of one instance, making
// branch coverage alternate between runs (e.g. 87.2% vs 79.4% on identical
// code). The forks pool measures the same suite deterministically.
export default {
  ...base,
  test: {
    ...base.test,
    pool: 'forks',
  },
};
