import { restore } from 'sinon';
import { use } from 'chai';
import sinonChai = require('sinon-chai');
import { callsLike } from 'chai-callslike';

use(sinonChai);
use(callsLike);

afterEach(() => {
  restore();
});
