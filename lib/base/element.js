//@ts-check
const {decorateBase} = require('../reporter')

class BaseElement {
  /**
    * @param {import('promod').PromodSeleniumElementType } root fragment root
    * @param {string} name fragment name
    */
  constructor(root, name) {
    this.root = root;
    this.name = name
  }

  async sendKeys(data) {
    //throw new Error(`Button ${this.name} can not execute sendKeys action`)
    await this.root.sendKeys(data)
  }

  async click() {
    // console.log('in CLICK this.root==>', this.root)
    await this.root.click()
  }

  async getData() {
    return (await this.root.getText()).trim()
  }

  async isDisplayed() {

    return this.root.isDisplayed()
  }

  async isRequiredItem(data) {
    //  data = {_element: username}
    let _element

    if(typeof data === 'object') {

      _element = data._element
    } else {
      _element = data
    }
    const thisContent = await this.getData()

    return thisContent.includes(_element)
  }
}
decorateBase(BaseElement, 'getData', (name) => `${name} execute getData`)
decorateBase(BaseElement, 'click', (name) => `${name} execute click`)
decorateBase(BaseElement, 'sendKeys', (name) => `${name} execute sendKeys`)

module.exports = {
  BaseElement
}