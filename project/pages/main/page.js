// @ts-check
const {BasePage} = require('../../../lib')
const {HeaderFragment} = require('./fragments/header')
const {LoginFragment} = require('./fragments/login')
const {RegistrationFragment} = require('./fragments/registration')
/**
 * @typedef {import ('./fragments/registration').RegistrationCommonAction} RegistrationCommonAction
 * @typedef {import ('./fragments/registration').RegistrationSendKeysAction} RegistrationSendKeysAction
 *
 * @typedef {import ('./fragments/login').LoginCommonAction} LoginCommonAction
 * @typedef {import ('./fragments/login').LoginSendKeysAction} LoginSendKeysAction
 *
 * @typedef {import ('./fragments/header').HeaderCommonAction} HeaderCommonAction
 */

/**
 * @typedef {object} MainPageInteractionInterface
 * @property {(data: {
 *  login?: LoginSendKeysAction
 *  register?: RegistrationSendKeysAction
 * })=>Promise<void>} sendKeys sendKeys-method
 *
 * @property {(data:{
 * header?: HeaderCommonAction
 * login?: LoginCommonAction
 * register?: RegistrationCommonAction
 * })=>Promise<void>} click click-method
 */
class MainPage extends BasePage {
  constructor() {
    super('#main_page', 'Main Page')
    this.header = this.init('.main_header', 'Header', HeaderFragment)
    this.login = this.init('.login_form', 'Login', LoginFragment)
    this.register = this.init('.registration_form', 'Registration', RegistrationFragment)
  }
}
/**
 *@returns {MainPageInteractionInterface} interaction interface
 */
function getMain() {
  return new MainPage()
}

module.exports = {
  MainPage, getMain
}