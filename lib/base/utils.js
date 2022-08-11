//@ts-check

const {deepStrictEqual} = require('assert')

// function _isEqual(itemA, itemB) {
//   console.log(itemA, itemB)
function isEqual(...originalArgs) {

  if(originalArgs.length < 2) {
    throw console.error('original args must to contain more items');
  }
  const [itemA, ...args] = originalArgs
  console.log('item=>', itemA)
  return args.every((itemB) => {
    try {
      deepStrictEqual(itemA, itemB)
      console.log('true', true)
      return true
    }
    catch {
      console.log('!!', itemA, itemB)
      console.log('false!!', false)
      return false
    }
  })
}


module.exports = {
  isEqual
}