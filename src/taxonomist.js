/* globals define */
var f = function () {

  'use strict';

  return function(arr, prop, indices) {

    indices = indices || false;

    var result = {},
        arrLen = arr.length,
        item, itemLen,
        key,
        i, j;

    for (i = 0; i < arrLen; ++i) {
      item = arr[i][prop];
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

};

/* istanbul ignore next */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.taxonomist = factory(root);
  }
})(this, f);