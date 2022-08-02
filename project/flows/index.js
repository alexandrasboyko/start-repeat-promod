//@ts-check
const mainFlows = require('./main')
const tablesFlows = require('./tables')
const adminsFlows = require('./admin')
const analiticsFlows = require('./analitics')
const {prettifyCamelCase} = require('sat-utils')
const {step} = require('../../lib')

const initFlows = {
  ...mainFlows,
  ...tablesFlows,
  ...adminsFlows,
  ...analiticsFlows,
}

Object.keys(initFlows).forEach((flowFnName) => {

  const prettyName = prettifyCamelCase(flowFnName)
  const fn = initFlows[flowFnName]

  initFlows[flowFnName] = async function(...args) {
    console.log(`I ${prettyName}`)
    return step(`${prettyName}`, () => fn.call(this, ...args), ...args)
  }
})

const I = {
  ...initFlows
}

module.exports = {
  I
}