// @ts-check

const {pageProvider} = require('../pages/provider')
const {expect} = require('assertior')
const {tables} = pageProvider
/**
 * @param {string} username username

 * @returns {Promise<void>}
 */

async function chekThatUserLooggedInSystem(username) {
  const {header: {greetingMessage}} = await tables.get({header: {greetingMessage: null}});
  expect(greetingMessage).stringIncludesSubstring(username)

}


module.exports = {
  chekThatUserLooggedInSystem
}