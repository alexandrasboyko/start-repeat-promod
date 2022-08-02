//@ts-check

const {provider} = require('../project')
const {I, client} = provider
const {it} = provider.testRunner
const {getRandomString} = require('sat-utils')



describe('Login form', () => {

  // const userData = {userName: 'admin', name: 'admin', email: 'admin', password: 'admin'}
  // const signIn = $$('.btn.btn-secondary').get(0)
  // const signUp = $$('.btn.btn-secondary').get(1)
  // const userNameReg = $('input[placeholder = "Ім\'я користувача"]')
  // const nameReg = $('input[placeholder = "Ім\'я"]')
  // const emailReg = $('input[placeholder = "Імейл"]')
  // const passwordReg = $('input[placeholder = "пароль"]')
  // const signInLog = $('.btn.btn-primary')
  // const signUpReg = $('.btn.btn-primary')

  it('[P] Send feedBack', async ({adminCreds}) => {
    const username = getRandomString(6)
    const adminMessage = 'How can I help you?'
    await client.get('http://localhost:4000/')
    await I.sendFeedBackToAdmin({username, content: '1'})

    await client.runNewBrowser()
    await client.get('http://localhost:4000/')
    await I.loginToSystem(adminCreds)
    await I.checkThatUserLoggedInSystem(adminCreds.username, true)
    await I.navigateToAdmin()
    await client.switchToTab({title: 'Адмінська сторінка'})
    await I.answerOnMessage({username, content: adminMessage})

    await client.switchToBrowser({index: 0})
    await client.sleep(2000)
    await I.checkThatAdminAnswerOnMyMessage({refresh: true, content: adminMessage})

    await client.sleep(10000)
  })


  it('[P] Success login', {tags: ['login', 'smoke']}, async ({adminCreds}) => {

    await client.get('http://localhost:4000/')
    //throw new Error(`This test should fail`)
    //await main.header.signUp.click()
    //console.log(await main.login.root.$('a').isDisplayed())
    //const userData = {username: 'admin', password: 'admin'}
    await I.loginToSystem(adminCreds)
    await I.checkThatUserLoggedInSystem(adminCreds.username, true)
    await client.sleep(10000)
  })

  it('[N] Failed login', async () => {
    // const {allure} = require('allure-mocha/runtime')
    // allure.epic('Some info');
    await client.get('http://localhost:4000/')

    const userData = {username: 'admin435', password: 'admin3234'}
    await I.loginToSystem(userData)
    await I.checkThatAfterFailedLoginFieldsAreFilled(userData)
    await client.sleep(10000)
  })

  it('[P] Admin creates new User', async () => {
    //const {allure} = require('allure-mocha/runtime')
    //allure.epic('Some info');
    const userData = {username: 'admin', password: 'admin'}
    await client.get('http://localhost:4000/')
    await I.loginToSystem(userData)
    await I.navigateToAdmin()
    await client.switchToTab({title: 'Адмінська сторінка'})
    await I.createNewUserOnAdminPage({username: 't2', name: 't2', email: 't2', password: 't2'})
    await I.checkThatUserInUsersList('t2')
    await client.sleep(15000)
  })

  it('[P] navigate to analitics Header', async () => {
    const userData = {username: 'admin', password: 'admin'}
    await client.get('http://localhost:4000/');
    await I.loginToSystem(userData)
    await I.navigateToAnalitic()
    await client.sleep(10000)
  })

  it('[P] check title on analitics Header', async () => {
    const userData = {username: 'admin', password: 'admin'}
    await client.get('http://localhost:4000/');
    await I.loginToSystem(userData)
    await I.navigateToAnalitic()
    await I.checkTitleOnAnaliticPage()
    await client.sleep(7000)
  })

  it('[P] check button on analitics Header', async () => {
    const userData = {username: 'admin', password: 'admin'}
    await client.get('http://localhost:4000/');
    await I.loginToSystem(userData)
    await I.navigateToAnalitic()
    await I.isDisplayedHeadersBtn('toTables')
    await I.getDataFromHeadersBtn('toAdmin')
    await client.sleep(7000)
  })

  it.only('[P] Click on Modal buttons', async () => {
    const userData = {username: 'admin', password: 'admin'}
    await client.get('http://localhost:4000/');
    await I.loginToSystem(userData)
    await I.navigateToAnalitic()
    // await I.clickOnFiltersToOpenModal()
    await I.checkMinMorkVolumeFilterDataInModalWindow()
    await client.sleep(15000)
  })
})

