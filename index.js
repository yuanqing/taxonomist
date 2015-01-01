'use strict';

var each = require('lodash.foreach');
var get = require('jaunt').get;

var taxonomist = function(arr, prop, fn) {

  var propFn = typeof prop === 'function' ? prop : function(item) {
    return get(item, prop);
  };

  fn = fn || function(obj) {
    return obj;
  };

  var result = {};
  each(arr, function(obj, i) {
    var tags = propFn(obj, i);
    if (typeof tags === 'undefined') {
      return false; // break from `each`
    }
    tags = [].concat(tags); // ensure `tags` is an array
    each(tags, function(tag, i) {
      tag = fn(tag, i);
      if (!(tag in result)) {
        // `tag` is not a key in `result`; create a new []
        result[tag] = [obj];
      } else {
        result[tag].push(obj);
      }
    });
  });

  return result;

};

module.exports = taxonomist;
