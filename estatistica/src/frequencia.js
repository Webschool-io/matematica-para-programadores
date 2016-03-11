'use strict';

const getFrequency = (arr) => {
  var counts = {};

  arr.forEach( function(element, index) {
    counts[element] = counts[element] ? counts[element]+1 : 1;
  });
  return counts;
};

var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
console.log(getFrequency(arr));