import {expect} from "chai";

import {runWith} from "../../src/assets/js/common/common";

describe('test "runWith" method in common module', function () {

    it('should "runWith" function worked with right element', function () {
        document.getElementsByTagName('body')[0].innerHTML = '<div id="app" app:name="test.app1"></div>';

        let isWork = false;
        runWith('test.app1', function () {
            isWork = true;
        });

        expect(isWork).to.be.true;
    });

    it('should "runWith" function not worked without right element', function () {
        let isWork = false;
        runWith('test.app2', function () {
            isWork = true;
        });

        expect(isWork).to.be.false;
    });
});