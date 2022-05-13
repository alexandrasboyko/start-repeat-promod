//@ts-check
const {ContentType} = require('allure-js-commons')

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

module.exports = {
  stepAllure
}