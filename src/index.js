
exports.min = function min (array) {
  return array && array.length ?
    array.slice().sort((a, b) => a - b)[0] :
    0;
}

exports.max = function max (array) {
  return array && array.length ?
    array.slice().sort((a, b) => b - a)[0] :
    0;
}

exports.avg = function avg (array) {
  return array && array.length ?
    array.slice().reduce((acc, item) => acc + item,0) / array.length :
    0;
}
