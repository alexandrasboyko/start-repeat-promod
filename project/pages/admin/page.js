//@ts-check
const {BasePage} = require('../../../lib')
const {Togglers} = require('./fragments/togglers')
const {UserFormFragment} = require('./fragments/new.user')
const {UsersListFragment} = require('./fragments/usersList')
const {FooterFragment} = require('../shared_fragments/footer')
const {AdminMessageFormFragment} = require('./fragments/message.form')

/**
 * @typedef {import ('./fragments/message.form').AdminMessageFormCommonAction} AdminMessageFormCommonAction
 * @typedef {import ('./fragments/message.form').AdminMessageFormSendKeys} AdminMessageFormSendKeys
 *
 * @typedef {import ('./fragments/new.user').UserFormCommonAction} UserFormCommonAction
 * @typedef {import ('./fragments/new.user').UserFormGetResAction} UserFormGetResAction
 * @typedef {import ('./fragments/new.user').UserFormSendKeysAction} UserFormSendKeysAction
 *
 * @typedef {import ('./fragments/togglers').TogglersCommonAction} TogglersCommonAction
 * @typedef {import ('./fragments/togglers').TogglersGetResAction} TogglersGetResAction
 *
 * @typedef {import ('./fragments/usersList').UsersListCommonAction} UsersListCommonAction
 * @typedef {import ('./fragments/usersList').UsersListGetResAction} UsersListGetResAction
 *
 * @typedef {import('../shared_fragments/footer').FooterCommonAction} FooterCommonAction
 */

/**
 * @typedef {object} AdminPageInteractionInterFace
 * @property {(data?:{
 * togglers?: TogglersCommonAction;
 * userForm?: UserFormCommonAction;
 * messageForm?: AdminMessageFormCommonAction;
 * footer?: FooterCommonAction;
 * })=>Promise<void>} click click
 * @property {(data?:{
 * userForm?: UserFormSendKeysAction;
 * messageForm?: AdminMessageFormSendKeys;
 * })=>Promise<void>} sendKeys sendKeys method
 * @property {(data?:{
 * togglers?: TogglersCommonAction;
 * userForm?: UserFormCommonAction;
 * usersList?: UsersListCommonAction
 * })=>Promise<{
 * togglers?: TogglersGetResAction;
 * userForm?: UserFormGetResAction;
 * usersList?: UsersListGetResAction
 * }>} getData getData method
 */
class AdminPage extends BasePage {
  constructor() {
    super('#admin_page', 'Admin Page')
    this.togglers = this.init('.view_toggler', 'Togglers', Togglers)
    this.userForm = this.init('.admin_new_user', 'Create New User Form', UserFormFragment)
    this.usersList = this.init('.admin_user_list_root', 'Users List', UsersListFragment)
    this.footer = this.init('xpath=//*[@id="admin_page"]/div[last()]', 'Footer Fragment', FooterFragment)
    this.messageForm = this.init('.message_modal', 'Admin messages Form', AdminMessageFormFragment)
  }
}

/**
 *@returns {AdminPageInteractionInterFace}
 */

function getAdmin() {
  return new AdminPage()
}

module.exports = {
  getAdmin
}