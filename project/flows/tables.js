//@ts-check
const {pageProvider} = require('../pages/pageProvider')
const {tables} = pageProvider
const {analytics} = pageProvider
const {isBoolean} = require('sat-utils')
const {expect} = require('assertior')

/**
 * @param {string} username username
 * @param {boolean} isAdmin
 * @returns {Promise<void>}
 */
async function checkThatUserLoggedInSystem(username, isAdmin) {
  let greetingMessage = `Таблиці, Привіт ${username}`

  if(isBoolean(isAdmin)) {
    await tables.waitForPageState({header: {isAdminMarker: isAdmin}})
    // console.log(tables.waitForPageState({header: isAdminMarker))
    greetingMessage += isAdmin ? '*' : ''
    console.log('greetingMessage=>', greetingMessage)
  }
  await tables.waitForPageState({header: {greetingMessage}})
}

async function navigateToAdmin() {
  await tables.click({header: {toAdmin: null}})
}

async function navigateToAnalitic() {
  await tables.click({header: {toAnalitics: null}})
}


module.exports = {
  checkThatUserLoggedInSystem, navigateToAdmin, navigateToAnalitic
}