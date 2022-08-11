//@ts-check
const {BasePage} = require('../../../lib')
const {HeaderFragment} = require('./fragments/header')
const {NewMachineFormFragment} = require('./fragments/new_machine')

/**
 * @typedef {import ('./fragments/header').HeaderCommonAction} HeaderCommonAction HeaderCommonAction
 * @typedef {import ('./fragments/header').HeaderGetResAction} HeaderGetResAction HeaderGetResAction
 * @typedef {import ('./fragments/header').HeaderIsDispResAction} HeaderIsDispResAction HeaderIsDispResAction
 *
 * @typedef {import ('./fragments/new_machine').NewMachineFormCommonAction} NewMachineFormCommonAction NewMachineFormCommonAction
 * @typedef {import ('./fragments/new_machine').NewMachineFormIsDispResAction} NewMachineFormIsDispResAction NewMachineFormIsDispResAction
 * @typedef {import ('./fragments/new_machine').NewMachineFormGetResAction} NewMachineFormGetResAction  NewMachineFormGetResAction
 * @typedef {import ('./fragments/new_machine').NewMachineFormSendKeysAction} NewMachineFormSendKeysAction NewMachineFormSendKeysAction
*/

/**
*@typedef {object} TablesPageInteractionInterface

*@property {(data:{
*addNewMachine?:NewMachineFormSendKeysAction
*})=>Promise<void>} sendKeys sendKeys method

*@property {(data:{
*header?:HeaderCommonAction
*addNewMachine?:NewMachineFormCommonAction
*})=>Promise<void>} click click method

*@property {(data:{
*header?:HeaderCommonAction
*addNewMachine?:NewMachineFormCommonAction
})=>Promise<{
*header?:HeaderGetResAction
*addNewMachine?:NewMachineFormGetResAction}>} getData getData method

*@property {(data:{
*header?:HeaderCommonAction
*addNewMachine?:NewMachineFormCommonAction
})=>Promise<{
*header?:HeaderIsDispResAction
*addNewMachine?:NewMachineFormIsDispResAction}>} isDisplayed isDisplayed method

*@property {(data:{
*header?:HeaderGetResAction|HeaderIsDispResAction
})=>Promise<void>} waitForPageState waitForPageState method
*/


class TablesPage extends BasePage {
  constructor() {
    super('#table_page', 'Tables Page')
    this.header = this.init('.header', 'Header', HeaderFragment)
    this.addNewMachine = this.init('.add_machine', 'Add Machine', NewMachineFormFragment)
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