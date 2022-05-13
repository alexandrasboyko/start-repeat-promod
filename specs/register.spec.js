//@ts-check

const {provider} = require('../project')
const {I, client} = provider
const {seleniumWD} = require('promod')
const {$} = seleniumWD
const {waitForCondition} = require('sat-utils')

describe('it', () => {
  it('test', async () => {

    async function getElementWhichReadyToWorking(selector) {
      await waitForCondition(async () => {
        const a = await $(selector).isDisplayed()
        return a
      })
      return $(selector)
    }

    const userData = {username: 'admin', password: 'admin'}
    await client.get('http://localhost:4000/tables')
    await I.loginToSystem(userData)
    const bttn = await getElementWhichReadyToWorking('h3')
    console.log('getText element=======>', await bttn.getText())
    await client.sleep(5000)
  })
})