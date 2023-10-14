import { restore } from 'sinon';
import { use } from 'chai';
import sinonChai from 'sinon-chai';
import { callsLike } from 'chai-callslike';

use(sinonChai);
use(callsLike);

afterEach(() => {
  restore();
});
