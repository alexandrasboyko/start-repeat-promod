// const {getRandomString} = require('sat-utils')



// function addFieldsToMachine(data = {}) {
//   return {
//     manufacturer: getRandomString(5),
//     workVolume: getRandomString(5, {numbers: true}),
//     width: getRandomString(5, {numbers: true}),
//     length: getRandomString(5, {numbers: true}),
//     mass: getRandomString(5, {numbers: true}),
//     tractorPower: getRandomString(5),
//     price: '1000',
//     ...data
//   }
// }

// const updated = addFieldsToMachine({price: '1.3'})
// const updated1 = addFieldsToMachine({})

// console.log(updated, updated1)

const {deepStrictEqual} = require('assert')

function isEqual(itemA, itemB) {
  console.log(itemA, itemB)
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

function isEqual2(...originalArgs) {

  if(originalArgs.length < 2) {
    throw console.error('original args must to contain more items');
  }
  const [itemB, ...args] = originalArgs
  console.log('item=>', itemB)
  // for(const item of originalArgs) {
  return args.every((itemA) => {
    try {
      deepStrictEqual(itemA, itemB)
      console.log('true', true)
      return true
    }
    catch {
      console.log('false', false)
      return false
    }
  })

}

isEqual2(1, 2)
// deepStrictEqual(1, 2)

const {waitForCondition} = require('sat-utils')

async function isDisplayed1() {
  await waitForCondition(async () => this.isDisplayed())
  return this.root.isDisplayed() // не використ waitForCondition, бо якщо використовувати, то якщо ми чекаємо відповідної умови, тобто відповідного стану системи, а якщо цей стан буде false протягом 5 сек, то впаде помилка
}
