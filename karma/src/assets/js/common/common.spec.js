import { expect } from "chai";

import { execute, times } from "./common";

describe("test 'times' object", () => {

  it("should 'nowString' function returned current time as string", () => {
    expect(/\d{4}年\d{2}月\d{2}日\s\d{2}:\d{2}:\d{2}/.test(times.nowString())).to.be.true;
  });
});

describe("test 'execute' function", () => {

  it("should 'execute' function worked with right element", () => {
    document.getElementsByTagName("body")[0].innerHTML = `<div id="app" app:name="test.app1"></div>`;

    let worked = false;
    execute("test.app1", () => {
      worked = true;
    });

    expect(worked).to.be.true;
  });

  it("should 'execute' function not worked without right element", () => {
    let worked = false;
    execute("test.app2", () => {
      worked = true;
    });

    expect(worked).to.be.false;
  });
});
