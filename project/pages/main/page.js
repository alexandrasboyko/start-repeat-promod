//@ts-check
const {BasePage} = require('../../../lib')
const {HeaderFragment} = require('./fragments/header')
const {LoginFragment} = require('./fragments/login')
const {RegistrationFragment} = require('./fragments/register')
const {FooterFragment} = require('../shared_fragments/footer')
const {MessageFormFragment} = require('../shared_fragments/message.form')
/**
 * @typedef {import('../shared_fragments/message.form').MessageFormCommonAction} MessageFormCommonAction
 * @typedef {import('../shared_fragments/message.form').MessageFormGetResAction} MessageFormGetResAction
 * @typedef {import('../shared_fragments/message.form').MessageFormSendKeysAction} MessageFormSendKeysAction
 *
 * @typedef {import('../shared_fragments/footer').FooterCommonAction} FooterCommonAction
 *
 * @typedef {import('./fragments/header').HeaderCommonAction} HeaderCommonAction
 *
 * @typedef {import('./fragments/login').LoginCommonAction} LoginCommonAction
 * @typedef {import('./fragments/login').LoginSendKeysAction} LoginSendKeysAction
 * @typedef {import('./fragments/login').LoginGetResAction} LoginGetResAction
 *
 * @typedef {import('./fragments/register').RegistrationCommonAction} RegistrationCommonAction
 * @typedef {import('./fragments/register').RegistrationSendKeysAction} RegistrationSendKeysAction
 */

/**
 *@typedef {object} MainPageInteractionInterface
 *@property {(data: {
  *login?:LoginSendKeysAction
  *register?: RegistrationSendKeysAction
  *feedBackForm?: MessageFormSendKeysAction
  *})=>Promise<void>} sendKeys sendKeys method

  @property {(data:{
  *header?:HeaderCommonAction
  *footer?:FooterCommonAction
  *login?:LoginCommonAction
  *register?:RegistrationCommonAction
  *feedBackForm?: MessageFormCommonAction
  })=>Promise<void>} click click method

  @property {(data:{
  *header?:HeaderCommonAction
  *login?:LoginCommonAction
  *register?:RegistrationCommonAction
  *feedBackForm?:MessageFormCommonAction
  })=>Promise<{
  *login?: LoginGetResAction
  *feedBackForm?:MessageFormGetResAction
  }>} getData getData method
 */
class MainPage extends BasePage {
  constructor() {
    super('#main_page', 'Main Page')
    this.header = this.init('.main_header', 'Header Fragment', HeaderFragment)
    this.login = this.init('.login_form', 'Login Fragment', LoginFragment)
    this.register = this.init('.registration_form', 'Registration Fragment', RegistrationFragment)
    this.footer = this.init('xpath=//*[@id="main_page"]/div[last()]', 'Footer', FooterFragment)
    this.feedBackForm = this.init('.message_modal', 'Feedback form', MessageFormFragment)
  }
}

/**
 * @returns {MainPageInteractionInterface} interaction interface
 */

function getMain() {
  return new MainPage()
}

module.exports = {
  MainPage, getMain
}