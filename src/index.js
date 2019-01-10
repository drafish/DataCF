if (process.env.BROWSER_VERSION === 'IE') {
  require('core-js/fn/object/define-property')
  require('core-js/fn/object/create')
  require('core-js/fn/array/for-each')
  require('core-js/fn/array/index-of')
  require('core-js/fn/promise')
}

console.log('BROWSER_VERSION: ', process.env.BROWSER_VERSION)

const add = require('./core').default

add()

window.sdk = {

}
