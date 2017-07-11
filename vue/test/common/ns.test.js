'use strict';

import {expect} from "chai";

import ns from "../../src/assets/js/common/ns";

describe('common module', function () {
    it('ns function should create namespace', function () {
        ns('test.add', function (a, b) {
            return a + b;
        });
        expect(test.add(1, 2)).to.be.eq(3);
    })
});