//@ts-check
const {BasePage} = require('../../../lib')
const {HeaderFragment} = require('./fragments/header')

/**
 * @typedef {import ('./fragments/header').HeaderCommonAction} HeaderCommonAction HeaderCommonAction
 * @typedef {import ('./fragments/header').HeaderGetResAction} HeaderGetResAction HeaderGetResAction
*/

/**
*@typedef {object} TablesPageInteractionInterface
*@property {(data:{
*header?:HeaderCommonAction
*})=>Promise<void>} click click method

*@property {(data:{
*header?:HeaderCommonAction
})=>Promise<{
*header?:HeaderGetResAction}>} getData getData method
*/

class TablesPage extends BasePage {
  constructor() {
    super('#table_page', 'Tables Page')
    this.header = this.init('.header', 'Header', HeaderFragment)
  }
}

/**
 * @returns {TablesPageInteractionInterface} interaction interface
 */

function getTables() {
  return new TablesPage()
}

module.exports = {
  TablesPage, getTables
}