'use strict';

var get = require('jaunt').get;

var taxonomist = function(arr, prop) {

  var result = {};

  var arrLen = arr.length;
  var i = -1;
  // for each `arr[i]` in `arr`...
  while (++i < arrLen) {
    var tags = [].concat(get(arr[i], prop)).filter(Boolean);
    var tagsLen = tags.length;
    var j = -1;
    // for each `tags[j]` in `tags`...
    while (++j < tagsLen) {
      var tag = tags[j];
      // create empty [] if `tag` is not a key in `result`
      if (tag in result === false) {
        result[tag] = [];
      }
      result[tag].push(arr[i]);
    }
  }

  return result;

};

module.exports = taxonomist;
