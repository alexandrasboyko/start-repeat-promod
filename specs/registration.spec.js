//@ts-check

const {provider} = require('../project')
const {I, client} = provider



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
  it('[P] Success login', async () => {

    await client.get('http://localhost:4000/')
    //await main.header.signUp.click()
    // console.log(await main.login.root.$('a').isDisplayed())
    const userData = {username: 'admin', password: 'admin'}
    await I.loginToSystem(userData)
    await I.checkThatUserLoggedInSystem(userData.username)
    await client.sleep(10000)
  })

  it('[N] Failed login', async () => {
    const {allure} = require('allure-mocha/runtime')
    allure.epic('Some info');
    await client.get('http://localhost:4000/')
    const userData = {username: 'admin435', password: 'admin3234'}
    await I.loginToSystem(userData)
    await I.checkThatAfterFailedLoginFieldsAreFilled(userData)
    await client.sleep(10000)
  })

  it.only('[P] Admin creates new User', async () => {
    //const {allure} = require('allure-mocha/runtime')
    //allure.epic('Some info');
    const userData = {username: 'admin', password: 'admin'}
    await client.get('http://localhost:4000/')
    await I.loginToSystem(userData)
    await client.sleep(1000)
    await I.navigateToAdmin()
    await I.createNewUserOnAdminPage({username: 'testT', name: 'testT', email: 'testT', password: 'testT'})
    await I.checkThatUserInUsersList('testT')
    await client.sleep(15000)
  })
})