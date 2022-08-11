//@ts-check
const {decorateBase} = require('../reporter')
const {waitForCondition} = require('sat-utils')

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
    console.log('data in sendKeys==>', data)
    await waitForCondition(async () => this.isDisplayed())
    await this.root.sendKeys(data)
  }

  async click() {
    // console.log('in CLICK this.root==>', this.root)
    await waitForCondition(async () => this.isDisplayed())
    await this.root.click()
  }

  async getData() {
    await waitForCondition(async () => this.isDisplayed())
    return (await this.root.getText()).trim()
  }

  async isDisplayed() {
    return this.root.isDisplayed() // не використ waitForCondition, бо якщо використовувати, то якщо ми чекаємо відповідної умови, тобто відповідного стану системи, то впаде помилка
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