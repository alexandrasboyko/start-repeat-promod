//@ts-check
const {seleniumWD} = require('promod')
const {browser} = seleniumWD

function stepConsole(stepName, action, ..._args) {
  console.log(stepName)
  return action()
}


async function attachFailedApplicationConditionConsole(stepName) {

  const url = await browser.getCurrentUrl()
  const localStorage = await browser.executeScript('return JSON.stringify(localStorage)')

  console.log(url, localStorage)
}

module.exports = {
  stepConsole, attachFailedApplicationConditionConsole
}