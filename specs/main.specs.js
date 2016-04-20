var should = require('chai').should();
var smoke = require('./../src/index');

describe('#smoke test', function(){
  it('tests that true equals true', function(){
    smoke.smokeTest().should.equal(true);
  })
})
