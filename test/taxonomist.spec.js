/* globals describe, it, expect */
'use strict';

var taxonomist = require('..');

describe('taxonomist(arr, prop)', function() {

  it('assigns objects in `arr` to categories based on the specified `prop`', function() {
    var arr = [
      { fields: { tags: ['foo', 'bar'] } },
      { fields: { tags: ['foo'] } },
      { fields: { tags: 'bar' } }
    ];
    var result = taxonomist(arr, 'fields.tags');
    expect(result).toEqual({
      foo: [ arr[0], arr[1] ],
      bar: [ arr[0], arr[2] ]
    });
    expect(result.foo[0]).toBe(arr[0]);
    expect(result.foo[1]).toBe(arr[1]);
    expect(result.bar[0]).toBe(arr[0]);
    expect(result.bar[1]).toBe(arr[2]);
  });

});
