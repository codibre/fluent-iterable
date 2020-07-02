import { restore } from 'sinon';
import { use } from 'chai';
import sinonChai = require('sinon-chai');

use(sinonChai);

afterEach(() => {
  restore();
});
