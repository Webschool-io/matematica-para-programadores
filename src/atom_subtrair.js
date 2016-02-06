module.exports = function () {
  var total = 0;
  var valores = Array.apply(null, arguments);
  valores.forEach(function(elem){ 
    total = total - elem
  });
  return total;
}