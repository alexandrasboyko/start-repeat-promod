//@ts-check
const {BasePage} = require('../../../lib')
const {HeaderFragment} = require('./fragments/header')
const {FiltersFragment} = require('./fragments/filters')
const {ModalFragment} = require('./fragments/modal')


/**
 * @typedef {import ('./fragments/header').HeaderCommonAction} HeaderCommonAction
 * @typedef {import ('./fragments/header').HeaderGetResAction} HeaderGetResAction
 * @typedef {import ('./fragments/header').HeaderIsDispResAction} HeaderIsDispResAction
 *
 * @typedef {import ('./fragments/filters').FiltersCommonAction} FiltersCommonAction
 * @typedef {import ('./fragments/filters').FiltersGetResAction} FiltersGetResAction
 * @typedef {import ('./fragments/filters').FiltersIsDispResAction} FiltersIsDispResAction
 *
 * @typedef {import ('./fragments/modal').ModalCommonAction} ModalCommonAction
 * @typedef {import ('./fragments/modal').ModalGetResAction} ModalGetResAction
 * @typedef {import ('./fragments/modal').ModalIsDispResAction} ModalIsDispResAction
 */

/**
 * @typedef {object} AnaliticsPageInteractionInterFace
 *
 * @property {(data: {
 * header?:HeaderCommonAction
 * filters?: FiltersCommonAction
 * modal?: ModalCommonAction
 * })=>Promise<void>} click click method
 *
 * @property {(data: {
 * header?: HeaderCommonAction
 * filters?: FiltersCommonAction
 * modal?: ModalCommonAction
 *  })=> Promise < {
 * header?: HeaderGetResAction
 * filters?: FiltersGetResAction
 * modal?: ModalGetResAction
 * } >} getData getData method
 *
 * @property {(data:{
 * header?: HeaderCommonAction
 * filters?: FiltersCommonAction
 * modal?: ModalIsDispResAction
 * })=> Promise <{
 * header?: HeaderIsDispResAction
 * filters?: FiltersIsDispResAction
 * modal?: ModalIsDispResAction}>} isDisplayed isDisplayed method
 */

class AnaliticsPage extends BasePage {
  constructor() {
    super('#analytics_page', 'Analitics Page')
    this.header = this.init('.header', 'Header', HeaderFragment)
    this.filters = this.init('.analytics_information', 'Filters Fragment', FiltersFragment)
    this.modal = this.init('.modal_wrapper>div', 'Modal Window', ModalFragment)
  }
}

/**
 *@returns {AnaliticsPageInteractionInterFace}
 */

function getAnalitics() {
  return new AnaliticsPage()
}

module.exports = {
  getAnalitics
}