'use strict';

const should = require('should');
const config = require('../gulp-tasks/config')

describe('Test gulp config', () => {

    it('test "gulp config.paths.source"', () => {
        var source = config.paths.source('test.js');
        source.should.be.equal('/asset/test.js');
    });

    it('test "gulp config.paths.source" with no argument', () => {
        var source = config.paths.source();
        source.should.be.equal('/asset');
    });

    it('test "gulp config.paths.build"', () => {
        var source = config.paths.build('test.js');
        source.should.be.equal('/asset/.build/test.js');
    });

    it('test "gulp config.paths.build"', () => {
        var source = config.paths.dest('test.js');
        source.should.be.equal('/www/asset/test.js');
    });
});