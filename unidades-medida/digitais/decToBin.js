const decToBin = (dec) => 
  [...Array.from({length: 8}, (k, i) => Math.pow(2, i) ).reverse(), dec]
    .reduce((acc, cur, i, t) => (i == t.length-1) ? acc : acc += (t[t.length-1]/cur >= 1) 
      ? (t[t.length-1] = t[t.length-1]%cur) ? '1' : '1' : '0' , '')

module.exports = decToBin