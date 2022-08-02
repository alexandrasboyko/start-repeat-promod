//@ts-check

const {pageProvider} = require('../pages/pageProvider')
const {admin} = pageProvider

/**
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

async function checkThatUserInUsersList(username) {
  await admin.click({togglers: {usersList: null}})
  const {usersList: {users}} = await admin.getData({usersList: {users: {action: {username: null}, username}}})
  console.log('users===>', users)
}

/**
 * @param {object} messageData
 * @param {boolean} [messageData.open] open
 * @param {string} [messageData.username] username
 * @param {boolean} [messageData.send] send
 * @param {string} [messageData.content] content
 */
async function answerOnMessage({open = true, username, send = true, ...messageData}) {
  if(open)
    await admin.click({footer: {openForm: null}});
  if(username) await admin.click({messageForm: {sessions: {action: {username: null}, username: {_element: username}}}})
  await admin.sendKeys({messageForm: messageData})
  await admin.click({messageForm: {send: null}})
}


module.exports = {
  createNewUserOnAdminPage,
  checkThatUserInUsersList,
  answerOnMessage
}
