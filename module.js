/*!
 * str-indexes-of | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/str-indexes-of
*/
import appendType from 'append-type';

export default function strIndexesOf(str, searchValue, fromIndex) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string, but got ' + appendType(str) + '.');
  }

  if (typeof searchValue !== 'string') {
    throw new TypeError(
      'Expected a string representing the value to search for, but got ' +
      appendType(searchValue) +
      '.'
    );
  }

  if (searchValue.length === 0) {
    throw new RangeError('The value to search for must be a non-empty string, but got an empty string.');
  }

  if (fromIndex !== undefined) {
    if (typeof fromIndex !== 'number') {
      throw new TypeError(
        'Expected an index where to start the searching forwards in the string, but got ' +
        (fromIndex === '' ? '\'\' (empty string)' : appendType(fromIndex)) +
        '.'
      );
    }

    if (fromIndex < 0) {
      fromIndex = 0;
    }
  } else {
    fromIndex = 0;
  }

  var lastIndex = -1;
  var results = [];

  while ((lastIndex = str.indexOf(searchValue, fromIndex + lastIndex + 1)) !== -1) {
    results.push(lastIndex);
  }

  return results;
}
