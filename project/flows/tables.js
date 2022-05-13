//@ts-check

const {pageProvider} = require('../pages/pageProvider')
const {tables} = pageProvider

const {expect} = require('assertior')
/**
 * @param {string} username username
 * @returns {Promise<void>}
 */

async function checkThatUserLoggedInSystem(username) {
  console.log('username====>>>>', username)

  const {header: {greetingMessage}} = await tables.getData({header: {greetingMessage: null}})
  expect(greetingMessage).stringIncludesSubstring(username)
}

async function navigateToAdmin() {
  await tables.click({header: {toAdmin: null}})
}

module.exports = {
  checkThatUserLoggedInSystem, navigateToAdmin
}