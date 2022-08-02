//@ts-check
const {ContentType} = require('allure-js-commons')
const {seleniumWD} = require('promod')
const {browser} = seleniumWD

function stepAllure(stepName, action, ...args) {
  const {allure} = require('allure-mocha/runtime')
  return allure.step(stepName, async () => {
    if(args.length) {
      allure.attachment(`${stepName} entry args`, JSON.stringify(args, null, '\t'), ContentType.JSON)
    }
    const rezult = await action()
    if(rezult) {
      allure.attachment(`${stepName} execution rezult`, JSON.stringify(rezult, null, '\t'), ContentType.JSON)
    }
    return rezult
  })
}

function attachFailedApplicationConditionAllure(stepName) {

  const {allure} = require('allure-mocha/runtime')

  return allure.step(stepName, async () => {
    const url = await browser.getCurrentUrl()
    const localStorage = await browser.executeScript('return JSON.stringify(localStorage)')
    const screenshot = await browser.takeScreenshot()

    allure.attachment('URL', url, ContentType.TEXT)
    allure.attachment('LOCALSTORAGE', localStorage, ContentType.JSON)
    allure.attachment('FAILED VIEW', Buffer.from(screenshot, 'base64'), ContentType.PNG)
  })
}



module.exports = {
  stepAllure, attachFailedApplicationConditionAllure

}