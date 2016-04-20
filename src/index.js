var maps = require('./helpers/placesMap')();

function numberToEnglish (number) {
  // import helper functions
  var placeArray = arrayifyNumber(number);
  var transcribe = require('./helpers/transcribe')();

  // concat the transcribed number to results string
  var transcribedResult = '';
  var subsetCount = placeArray.length;
  var transcribedSegment;

  for(var x = 0; x < placeArray.length; x++){
    subsetCount--;
    transcribedSegment = transcribe(placeArray[x]);
    if(transcribedSegment.length !== 0){
      transcribedResult += transcribedSegment + ' ' + maps.subsetMap[subsetCount] + ' ';
    }
  }

  if(number == 0) return 'zero'; 
  if(number == 10) return 'ten'; 

  return transcribedResult.trim();
}

/*
 * ####################
 * # HELPER FUNCTIONS #
 * ####################
 */

// make function to transcribe subsets
var arrayifyNumber = function(number){
  // break number into subsets of 3 digits
  var splitNum = number.toString().split('');
  var placeArray = [];

  while(splitNum.length > 3){
    placeArray.unshift(splitNum.splice(splitNum.length-3));
  }

  placeArray.unshift(splitNum);
  // console.log(placeArray);
  return placeArray;
}

module.exports = numberToEnglish;
