//@ts-check
const {attachFailedApplicationCondition} = require('../reporter/index')
const {isObject, toArray} = require('sat-utils')
const mochaIt = global.it;
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const fixturesHolder = {}

/**
 * @typedef {()=>Promise<void>|void} testCaseBody
 */
function wrapTestCaseBody(testCaseTitle, testCaseBodyCallback) {
  return (async function() {
    try {
      await testCaseBodyCallback.call(this, fixturesHolder)
    } catch(error) {

      await attachFailedApplicationCondition(`FAILED ${testCaseTitle}`)
      throw error
    }
  }).bind(this)
}

/**
 * @param {string} testCaseTitle
 * @param {{tags:string|string[]}|testCaseBody} testCaseBodyCallbackOrOptions
 * @param {testCaseBody} [testCaseBodyCallback]
 */

function it(testCaseTitle, testCaseBodyCallbackOrOptions, testCaseBodyCallback) {
  //@ts-ignore
  const {tags} = argv;
  if(tags && arguments.length === 2)
    // console.log('============>', arguments, arguments.length)
    return

  if(!isObject(testCaseBodyCallbackOrOptions)) {
    console.log('testCaseBodyCallbackOrOptions=>', testCaseBodyCallbackOrOptions)
    //@ts-ignore
    testCaseBodyCallback = testCaseBodyCallbackOrOptions
  } else {
    console.log('klmxcmnl')
    //@ts-ignore
    const {tags: testCaseTags} = testCaseBodyCallbackOrOptions
    if(tags && testCaseTags) {
      console.log('testCaseTags=>>>', testCaseTags)
      console.log('tags=>>>', tags)

      const testCaseTagsArr = toArray(testCaseTags)
      console.log('testCaseTagsArr==>>', testCaseTagsArr)
      const runArgsTagArr = tags.toString().split(',')
      console.log('runArgsTagArr===>', runArgsTagArr)
      const doesTestCaseHaveRequiredTags = testCaseTagsArr.some((testCaseTag) => runArgsTagArr.includes(testCaseTag))
      console.log('doesTestCaseHaveRequiredTags', doesTestCaseHaveRequiredTags)
      if(!doesTestCaseHaveRequiredTags) {
        return
      }
    }
  }
  mochaIt(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallback))
}

/**
 * @param {string} testCaseTitle
 * @param {{tags:string|string[]}|testCaseBody} testCaseBodyCallbackOrOptions
 * @param {testCaseBody} [testCaseBodyCallback]
 */

it.only = function(testCaseTitle, testCaseBodyCallbackOrOptions, testCaseBodyCallback) { // console.log(it) // [Function: it] { only: [Function (anonymous)] }  => у функції свойство 'only', воно безпосередньо їй належить, воно нове, створене для саме цієї функції 'it'
  console.log('argv=>', argv)
  if(!isObject(testCaseBodyCallbackOrOptions)) {
    //@ts-ignore
    testCaseBodyCallback = testCaseBodyCallbackOrOptions
  }
  mochaIt.only(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallback)) // а це свойство 'only' вже існуюче для 'global.it', тобто константи mochaIt ми викликаємо написане вже готове свойство із 'promod'
}

it.initFixtures = function(fixturesData) {
  if(isObject(fixturesData)) {
    return Object.assign(fixturesHolder, fixturesData)
  }
  throw new TypeError('fixturesData should be an object')
}


module.exports = {
  it
}
