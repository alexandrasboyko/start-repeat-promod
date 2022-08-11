//@ts-check
const {pageProvider} = require('../pages/pageProvider')
const {tables} = pageProvider
const {analytics} = pageProvider
const {isBoolean} = require('sat-utils')
const {expect} = require('assertior')
const {client} = require('../../lib')
const {getRandomString} = require('sat-utils')

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


/**
 * @param {object} machine
 * @param {string|number} machine.manufacturer manufacturer
 * @param {string|number} machine.workVolume workVolume
 * @param {string|number} machine.width width
 * @param {string|number} machine.length length
 * @param {string|number} machine.mass mass
 * @param {string|number} machine.tractorPower tractorPower
 * @param {string|number} machine.price price
 */

async function addNewMachine(machine) {
  console.log(machine)
  await tables.sendKeys({addNewMachine: machine})
  await tables.click({addNewMachine: {addBtn: null}})
}


module.exports = {
  checkThatUserLoggedInSystem, navigateToAdmin, navigateToAnalitic, addNewMachine
}