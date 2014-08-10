/* globals describe, it, expect, taxonomist */

describe('taxonomist', function() {

  var arr = [
    { tags: [ 'foo', 'bar' ] },
    { tags: [ 'foo' ] },
    { tags: [ 'bar' ] }
  ];

  it('assigns objects to categories based on the specified `prop`', function() {
    expect(taxonomist(arr, 'tags')).toEqual({
      foo: [ arr[0], arr[1] ],
      bar: [ arr[0], arr[2] ],
    });
  });

  it('can store the object indices instead of the objects themselves', function() {
    expect(taxonomist(arr, 'tags', true)).toEqual({
      foo: [ 0, 1 ],
      bar: [ 0, 2 ],
    });
  });

});
