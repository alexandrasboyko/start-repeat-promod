//@ts-check
const {BasePage} = require('../../../lib')
const {Togglers} = require('./fragments/togglers')
//const {UserItemFragment} = require('./fragments/users.item')
const {UserFormFragment} = require('./fragments/new.user')
/**
 * @typedef {import ('./fragments/new.user').UserFormCommonAction} UserFormCommonAction
 * @typedef {import ('./fragments/new.user').UserFormGetResAction} UserFormGetResAction
 * @typedef {import ('./fragments/new.user').UserFormSendKeysAction} UserFormSendKeysAction
 * @typedef {import ('./fragments/togglers').TogglersCommonAction} TogglersCommonAction
 * @typedef {import ('./fragments/togglers').TogglersGetResAction} TogglersGetResAction
 */

/**
 * @typedef {object} AdminPageInteractionInterFace
 * @property {(data?:{
 * togglers?: TogglersCommonAction;
 * userForm?: UserFormCommonAction;
 * })=>Promise<void>} click click
 * @property {(data?:{
 * userForm?: UserFormSendKeysAction;
 * })=>Promise<void>} sendKeys sendKeys method
 * @property {(data?:{
 * togglers?: TogglersCommonAction;
 * userForm?: UserFormCommonAction;
 * })=>Promise<{
 * togglers?: TogglersGetResAction;
 * userForm?: UserFormGetResAction}>} getData getData method
 */
class AdminPage extends BasePage {
  constructor() {
    super('#admin_page', 'Admin Page')
    this.togglers = this.init('.view_toggler', 'Togglers', Togglers)
    this.userForm = this.init('.admin_new_user', 'Create New User Form', UserFormFragment)
  }
}
/**
 *@returns {AdminPageInteractionInterFace}
 */
function getAdmin() {
  return new AdminPage()
}

module.exports = {
  AdminPage, getAdmin
}