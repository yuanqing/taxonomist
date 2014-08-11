'use strict';

var jaunt = require('jaunt');

var taxonomist = function(arr, prop, indices) {

  indices = indices || false;

  var result = {},
      arrLen = arr.length,
      item, itemLen,
      key,
      i, j;

  for (i = 0; i < arrLen; ++i) {
    item = jaunt(arr[i], prop);
    itemLen = item.length;
    for (j = 0; j < itemLen; ++j) {
      key = item[j];
      if (key in result === false) {
        result[key] = [];
      }
      result[key].push(indices ? i : arr[i]);
    }
  }

  return result;

};

module.exports = exports = taxonomist;
