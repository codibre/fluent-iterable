import { restore } from 'sinon';
import { use } from 'chai';
import sinonChai from 'sinon-chai';

use(sinonChai);

afterEach(() => {
  restore();
});
