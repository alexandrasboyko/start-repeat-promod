//@ts-check

const {stepAllure, attachFailedApplicationConditionAllure} = require('./allure')
const {stepConsole, attachFailedApplicationConditionConsole} = require('./console')
const {LOG_ALL} = process.env

/**
 * @param {string} stepName stepName
 * @param {(...args:any[])=>Promise<any>} action action
 * @param  {...any[]} restArgs rest args
 * @returns {Promise<any>} execution result
 */

function step(stepName, action, ...restArgs) {
  const {allure} = require('allure-mocha/runtime')
  if(allure) {
    return stepAllure(stepName, action, ...restArgs)
  }
  return stepConsole(stepName, action, ...restArgs)
}


/**
 *@param {new (...args:any[])=>any}  classToDecorate classToDecorate
 *@param {string} methodName
 *@param {(...args:any[])=>string} messageFn
 */

function decorateBase(classToDecorate, methodName, messageFn) {
  if(!LOG_ALL) {
    return;
  }
  console.log('classToDecorate==>', classToDecorate, 'methodName==>', methodName, 'messageFN==>', messageFn)
  //  initFlows[flowFnName] = async function(...args) {
  //  return step(`${prettyName}`, () => fn.call(this, ...args), ...args) }

  // decorateBase(BasePage, 'sendKeys', (name) => `${name} execute sendKeys`)

  const methodDescriptor = Object.getOwnPropertyDescriptor(classToDecorate.prototype, methodName)
  console.log('methodDecrpt==>', methodDescriptor) // {
  //   value: [AsyncFunction: getData],
  //     writable: true,
  //       enumerable: false,
  //         configurable: true
  // }

  const originalMethodImplementation = methodDescriptor.value //[AsyncFunction: getData]

  const decorated = async function(...args) {
    const originalCallable = originalMethodImplementation.bind(this, ...args) // [AsyncFunction: getData].bind(...)
    const prettyName = messageFn(this.name) //(name) => `${name} execute sendKeys, getData, click`
    return step(prettyName, originalCallable, ...args) //step({getData, [AsyncFunction: getData].bind(...args)}, ...args)
  }

  Object.defineProperty(decorated, 'name', {value: methodName})
  methodDescriptor.value = decorated
  Object.defineProperty(classToDecorate.prototype, methodName, methodDescriptor)
}

function attachFailedApplicationCondition(title) {
  const {allure} = require('allure-mocha/runtime')

  if(allure) {
    return attachFailedApplicationConditionAllure(title)
  }
  return attachFailedApplicationConditionConsole(title)
}


module.exports = {
  step, decorateBase, attachFailedApplicationCondition
}