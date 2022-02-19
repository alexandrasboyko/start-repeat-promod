const mainFlows = require('./main')
const tablesFlows = require('./tables')
const {prettifyCamelCase} = require('sat-utils')

const initFlows = {
  ...mainFlows,
  ...tablesFlows
}

Object.keys(initFlows).forEach((flowFnName) => {
  const prettyName = prettifyCamelCase(flowFnName);
  const fn = initFlows[flowFnName]
  // console.log('prettyName=>', prettyName, '    fn=>', initFlows[flowFnName])
  initFlows[flowFnName] = async function(...args) {
    //ToDo add logger/reporting system
    // console.log(`I ${prettyName}`)
    // console.log('this= ', this)
    // console.log("args=> ", ...args)
    // console.log(fn.call(this, ...args))
    return fn.call(this, ...args)
  }
})

const I = {
  ...initFlows
}

module.exports = {
  I
}