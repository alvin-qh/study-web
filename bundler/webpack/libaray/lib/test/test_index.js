import { expect } from 'chai';

import * as lib from '../src/index.js';

describe('Test "index.js"', () => {
  it('should "join" function word', () => {
    const s = lib.join(['Hello', 'World'], ' ');
    expect(s).is.eql('Hello World');
  });
});
