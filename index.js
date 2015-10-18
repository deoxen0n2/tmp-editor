var tmp = require('tmp')
var editor = require('editor')
var readFile = require('fs').readFile

var tmpEditor = function (onComplete) {
  tmp.file(function onTmpCreated (tmpError, tmpPath) {
    if (tmpError) return onComplete(tmpError)

    editor(tmpPath, function (code) {
      if (code) return onComplete(new Error('Editor error:', code))

      readFile(tmpPath, 'utf8', function (error, text) {
        onComplete(error, text.trim())
      })
    })
  })
}

var tmpEditorAsPromised = function (onComplete) {
  if (onComplete) return tmpEditor(onComplete)
  if (typeof Promise === 'undefined') throw (new Error('No native Promise support'))

  return new Promise(function (resolve, reject) {
    tmpEditor(function onComplete (error, text) {
      if (error) reject(error)
      else resolve(text)
    })
  })
}

module.exports = tmpEditorAsPromised
