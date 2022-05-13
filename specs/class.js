//@ts-check
const {waitForCondition} = require('sat-utils')
const {seleniumWD} = require('promod')
const {$, browser} = seleniumWD

// describe('it', () => {
//   it.only('test', async () => {
//     async function getElementWitchReadyToWorking(selector) {
//       await waitForCondition(async () => {
//         const result = await $(selector).isDisplayed()
//         return result
//       })
//       return $(selector)
//     }
//     await browser.get('http://localhost:4000/')
//     const a = await getElementWitchReadyToWorking('input')
//     console.log(await a.getText())
//     await browser.sleep(5000)
//   })
// })
