//@ts-check

const {pageProvider} = require('../pages/pageProvider')
const {main} = pageProvider
const {expect} = require('assertior')
const {waitForCondition} = require('sat-utils')


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
 * @param {object} feedBackData
 * @param {boolean} [feedBackData.open] open
 * @param {string} [feedBackData.username] username
 * @param {string} [feedBackData.content] content
 * @param {boolean} [feedBackData.send] send
 * @param {boolean} [feedBackData.refresh] refresh
 */
async function sendFeedBackToAdmin({open = true, send = true, ...messageData}) {
  if(open) await main.click({footer: {openForm: null}})

  await main.sendKeys({feedBackForm: messageData})
  if(send) await main.click({feedBackForm: {send: null}})
}

/**
 * @param {object} data
 * @param {boolean} [data.refresh]
 * @param {string} data.content
 */
async function checkThatAdminAnswerOnMyMessage({refresh, content}) {
  console.log('!!!!!!!!!!!!!!!!!!!!!data', content)

  if(refresh) await main.click({feedBackForm: {refresh: null}})

  await waitForCondition(async () => {
    const {feedBackForm} = await main.getData({feedBackForm: {adminMessages: {action: {content: null}}}})
    console.log('{feedBackForm}==>', {feedBackForm})

    return feedBackForm.adminMessages.some((item) => {
      console.log('Item.content======>', item.content)
      console.log('Item======>', content)
      item.content === content
    }), {message: 'Admin did not answear'}
  })
}








module.exports = {
  loginToSystem, registerToSystem, checkThatAfterFailedLoginFieldsAreFilled, sendFeedBackToAdmin, checkThatAdminAnswerOnMyMessage
}