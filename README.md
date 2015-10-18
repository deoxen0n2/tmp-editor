# tmp-editor

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Temp file editing with `$EDITOR`. Get string from that file when finish.

## Install

```bash
$ npm-install --save tmp-editor
```

## Usage

```js
  var tmpEditor = require('tmp-editor')

  tmpEditor().then(function handleSuccess (text) {
    console.log('Text:', text)
  }).catch(function handleFailure (error) {
    console.log('Edit error:', error)
  })
```

## Promise and Callback

This module uses native `Promise` from `Node 0.12.x` and later for promise interface but standard node callback is also available: `tmpEditor(function onComplete (error, text) { ... })`.

## License

MIT. Copyright (c) Saran Siriphantnon.
