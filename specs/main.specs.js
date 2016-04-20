var expect = require('chai').expect;
var numberToEnglish = require('./../src/index');
var testParams = require('./testList')
console.log(numberToEnglish(2));

describe('#smoke test', function(){
  testParams.forEach(function(param){
    it(param.description, function(){
      expect(param.description).to.equal(numberToEnglish(param.integer));
    })
  })
});
