# str-indexes-of

[![npm version](https://img.shields.io/npm/v/str-indexes-of.svg)](https://www.npmjs.com/package/str-indexes-of)
[![Build Status](https://travis-ci.org/shinnn/str-indexes-of.svg?branch=master)](https://travis-ci.org/shinnn/str-indexes-of)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/str-indexes-of.svg)](https://coveralls.io/github/shinnn/str-indexes-of)

Like [`String#indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf), but return all indexes instead of the first one

```javascript
import strIndexesOf from 'str-indexes-of';

strIndexesOf('aaa', 'a'); //=> [0, 1, 2]
strIndexesOf('ffoofffofofofofofffooffoo', 'foo'); //=> [1, 18, 22]
```

Almost the same module as [indexes-of](https://github.com/dominictarr/indexes-of), but:

* only supports `String` explicitly
  * throws `TypeError` when it takes an `Array`
* supports optional [`fromIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#Parameters) parameter
* disallows empty search value

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install str-indexes-of
```

## API

```
import strIndexesOf from 'str-indexes-of';
```

### strIndexesOf(*str*, *searchValue* [, *fromIndex*])

*str*: `string`  
*searchValue*: `string` (value to search for)  
*fromIndex*: `number` (index in the string where to begin searching)  
Return: `Array` of `string`

```javascript
strIndexesOf('ABC-ABC', 'A'); //=> [0, 4]
strIndexesOf('ABC-ABC', 'A', 4); //=> [4]
```

## Related project

[arr-indexes-of](https://github.com/shinnn/arr-indexes-of) - [`Array#indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) version

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
