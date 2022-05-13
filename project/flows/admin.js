//@ts-check

const {pageProvider} = require('../pages/pageProvider')
const {admin} = pageProvider
/**
 *
 * @param {object} userData
 * @param {string|number} [userData.username] username
 * @param {string|number} [userData.name] name
 * @param {string|number} [userData.email] email
 * @param {string|number} [userData.password] password
 * @param {boolean} [userData.isAdmin] isAdmin
 */

async function createNewUserOnAdminPage(userData) {
  await admin.click({togglers: {newUser: null}})
  await admin.sendKeys({userForm: userData})
  await admin.click({userForm: {create: null}})
}

module.exports = {
  createNewUserOnAdminPage
}
