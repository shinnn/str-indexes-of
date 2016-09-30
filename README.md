# str-indexes-of

[![NPM version](https://img.shields.io/npm/v/str-indexes-of.svg)](https://www.npmjs.com/package/str-indexes-of)
[![Bower version](https://img.shields.io/bower/v/str-indexes-of.svg)](https://github.com/shinnn/str-indexes-of/releases)
[![Build Status](https://travis-ci.org/shinnn/str-indexes-of.svg?branch=master)](https://travis-ci.org/shinnn/str-indexes-of)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/str-indexes-of.svg)](https://coveralls.io/r/shinnn/str-indexes-of)
[![devDependencies Status](https://david-dm.org/shinnn/str-indexes-of/dev-status.svg)](https://david-dm.org/shinnn/array-to-error?type=dev)

Like [`String#indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf), but return all indexes instead of the first one

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

### [npm](https://www.npmjs.com/)

```
npm install str-indexes-of
```

### [bower](http://bower.io/)

```
bower install str-indexes-of
```

## API

### strIndexesOf(*str*, *searchValue* [, *fromIndex*])

*str*: `String`  
*searchValue*: `String` (value to search for)  
*fromIndex*: `Number` (index in the string where to begin searching)  
Return: `Array` of `String`

```javascript
strIndexesOf('ABC-ABC', 'A'); //=> [0, 4]
strIndexesOf('ABC-ABC', 'A', 4); //=> [4]
```

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
