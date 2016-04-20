var should = require('chai').should();
var smoke = require('./../src/index');
var tests = require('./testList')

describe('#smoke test', function(){
  it('tests that true equals true', function(){
    smoke().should.equal(true);
  })
})
