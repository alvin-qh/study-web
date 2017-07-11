import {expect} from "chai";

import utils from "../../src/assets/js/common/utils";

describe('common module', function () {
    describe('times class', function () {
        it('nowString function should return current time string', function () {
            expect(/\d{4}年\d{2}月\d{2}日\s\d{2}:\d{2}:\d{2}/.test(utils.times.nowString())).to.be.true;
        })
    })
});