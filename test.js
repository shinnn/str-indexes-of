'use strict';

const strIndexesOf = require('.');
const test = require('tape');

test('strIndexesOf()', t => {
  t.deepEqual(
    strIndexesOf('abcbc', 'b'),
    [1, 3],
    'should return indexes of the search value.'
  );

  t.deepEqual(
    strIndexesOf('abcbc', 'b', 2),
    [3],
    'should support the third `fromIndex` parameter.'
  );

  t.deepEqual(
    strIndexesOf('abcbc', 'b', -9999),
    [1, 3],
    'should treat negative `fromIndex` as 0.'
  );

  t.throws(
    () => strIndexesOf(1, 'a'),
    /^TypeError.*Expected a string, but got 1 \(number\)\./,
    'should throw a type error when the first argument is not a string.'
  );

  t.throws(
    () => strIndexesOf('a', false),
    /^TypeError.*Expected a string representing the value to search for, but got false \(boolean\)\./,
    'should throw a type error when the second argument is not a string.'
  );

  t.throws(
    () => strIndexesOf('a', ''),
    /^Error.*The value to search for must be a non-empty string, but got an empty string\./,
    'should disallow empty search value to avoid infinite loop.'
  );

  t.throws(
    () => strIndexesOf('a', 'b', 'c'),
    /^TypeError.*Expected an index where to start the searching forwards in the string, but got c \(string\)\./,
    'should throw a type error when the third argument is not a number.'
  );

  t.throws(
    () => strIndexesOf('a', 'b', ''),
    /^TypeError.*Expected an index where to start the searching forwards in the string, but got an empty string\./,
    'should throw a type error when the third argument is an empty string.'
  );

  t.end();
});
