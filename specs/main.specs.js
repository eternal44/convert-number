var expect = require('chai').expect;
var numberToEnglish = require('./../src/index');
var testParams = require('./testList')

describe('test input and output', function(){
  testParams.forEach(function(param){
    it('translate ' + param.description + 'to an integer', function(){
      expect(numberToEnglish(param.integer)).to.equal(param.description);
    })
  })
});
