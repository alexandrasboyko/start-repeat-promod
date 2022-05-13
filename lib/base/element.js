//@ts-check

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
    console.log('in CLICK this.root==>', this.root)
    await this.root.click()
  }

  async getData() {
    return this.root.getText()
  }

}

module.exports = {
  BaseElement
}