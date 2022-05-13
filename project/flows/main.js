//@ts-check

const {pageProvider} = require('../pages/pageProvider')
const {main} = pageProvider
const {expect} = require('assertior')

function fieldsToNull(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = null
    return acc
  }, {})
}

/**
 * @param {object} userData
 * @param {string} [userData.username]
 * @param {string} [userData.password]
 */

async function loginToSystem(userData = {}) {
  await main.getData({header: {signIn: null}})
  await main.sendKeys({login: userData})
  await main.click({login: {signInLog: null}})
}

/**
 * @param {object} userData
 * @param {string} [userData.usernameReg] userNameReg
 * @param {string} [userData.nameReg] nameReg
 * @param {string} [userData.emailReg] emailReg
 * @param {string} [userData.passwordReg] passwordReg
 */

async function registerToSystem(userData = {}) {
  await main.click({header: {signUp: null}})
  await main.sendKeys({register: userData})
  await main.click({register: {signUpReg: null}})
}

/**
 * @param {object} userData
 * @param {string|number} [userData.username] username
 * @param {string|number} [userData.password] password
 * @returns {Promise<void>}
 */

async function checkThatAfterFailedLoginFieldsAreFilled(userData = {}) {
  const {login} = await main.getData({login: fieldsToNull(userData)})
  Object.keys(userData).forEach((key) => {
    expect(userData[key]).toEqual(login[key], `Login form ${key} element should have value ${userData[key]}`)
  })
}

/**
 * @param {object} userData
 * @param {string|number} [userData.username]
 * @param {string|number} [userData.password]
 * @return {Promise<any>}
 */

async function checkThatAfterFailedLoginFieldsAreFilled(userData = {}) {
  const {login} = await {login: fieldsToNull(userData)}
  Object.keys(userData).forEach((key) => {
    expect(userData[key]).toEqual(login[key], `${key} should have value ${userData[key]}`)
  })
}

module.exports = {
  loginToSystem, registerToSystem, checkThatAfterFailedLoginFieldsAreFilled
}