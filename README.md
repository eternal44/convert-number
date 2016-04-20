# number-to-english [![Build Status](https://travis-ci.org/eternal44/number-to-english.svg?branch=master)](https://travis-ci.org/eternal44/number-to-english)


> Convert numbers from one format to another.

## Install

```
$ npm install --save number-to-english
```

## Development
To run tests follow the following instructions:

```
$ npm install -g gulp
$ npm install -g mocha
```

To run tests on file changes:
```
$ gulp test
```

Alternatively you can run individual tests:
```
$ mocha specs/**
```

## Usage

```js
var numberToEnglish = require('number-to-english')

numberToEnglish(2450)
// two thousand four hundred fifty
```
## License
MIT
