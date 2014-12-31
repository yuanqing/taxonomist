'use strict';

var each = require('lodash.foreach');
var get = require('jaunt').get;

var identity = function(o) {
  return o;
};

var taxonomist = function(arr, prop, fn) {

  fn = fn || identity;

  var result = {};
  each(arr, function(val) {
    var tags = [].concat(get(val, prop)).filter(Boolean);
    each(tags, function(tag) {
      tag = fn(tag);
      // create empty [] if `tag` is not a key in `result`
      if (tag in result === false) {
        result[tag] = [];
      }
      result[tag].push(val);
    });
  });

  return result;

};

module.exports = taxonomist;
