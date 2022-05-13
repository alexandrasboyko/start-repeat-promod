//@ts-check
const {BaseElement} = require('../base/element')

class Checkbox extends BaseElement {

  constructor(root, name) {
    super(root, name)
  }

  async getData() {
    return this.root.getAttribute('checked')
  }

  async click(data) {
    throw new TypeError(`Checkbox ${this.name} can not execute click`)
  }

  async sendKeys(condition) {
    if(await this.getData() === condition) {  // метод класу "getData" викликається напряму в this.getData()
      return
    }
    await this.root.click() //цей клiк викликається у promod selenium element-a,

  }
}

module.exports = {
  Checkbox
}