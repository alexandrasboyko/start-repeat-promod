//@ts-check

const {deepStrictEqual} = require('assert')

function isEqual(itemA, itemB) {
  try {
    deepStrictEqual(itemA, itemB)
    console.log('true', true)
    return true
  }
  catch {
    console.log('false', false)
    return false
  }
}

module.exports = {
  isEqual
}