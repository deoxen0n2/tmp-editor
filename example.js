var tmpEditor = require('.')

// Promise interface.
tmpEditor().then(function handleSuccess (text) {
  console.log('Text:', text)
}).catch(function handleFailure (error) {
  console.log('Edit error:', error)
})

// Callback style.
tmpEditor(function onComplete (error, text) {
  if (error) return (console.log('Edit error:', error))

  console.log('Text:', text)
})
