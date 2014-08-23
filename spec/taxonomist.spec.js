/* globals describe, it, expect */
'use strict';

var taxonomist = require('..');

describe('taxonomist(arr, prop, indices)', function() {

  var arr = [
    { fields: { tags: ['foo', 'bar'] } },
    { fields: { tags: ['foo'] } },
    { fields: { tags: ['bar'] } }
  ];

  it('assigns the objects to categories based on the specified `prop`', function() {
    var expected = {
      foo: [arr[0], arr[1]],
      bar: [arr[0], arr[2]],
    };
    expect(taxonomist(arr, 'fields.tags')).toEqual(expected);
    expect(taxonomist(arr, ['fields', 'tags'])).toEqual(expected);
  });

  it('can return the object indices instead of the objects themselves', function() {
    expect(taxonomist(arr, 'fields.tags', true)).toEqual({
      foo: [0, 1],
      bar: [0, 2],
    });
  });

});
