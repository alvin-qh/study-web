import { expect } from "chai";

import { runWith } from "../../src/assets/js/common/common";

describe('test "runWith" method in common module', () => {

  it('should "runWith" function worked with right element', () => {
    document.getElementsByTagName('body')[0].innerHTML = '<div id="app" app:name="test.app1"></div>';

    let isWork = false;
    runWith('test.app1', () => {
      isWork = true;
    });

    expect(isWork).to.be.true;
  });

  it('should "runWith" function not worked without right element', () => {
    let isWork = false;
    runWith('test.app2', () => {
      isWork = true;
    });

    expect(isWork).to.be.false;
  });
});
