// @ts-check

const {seleniumWD} = require('promod')
const {$} = seleniumWD

class BasePage {
  /**
   * @param {string} selector page root selector
   * @param {string} name page name
   */
  constructor(selector, name) {
    this.selector = selector
    this.name = name
    this.root = $(this.selector)
  }
  /**
   *
   * @param {string} selector
   * @param {string} name
   * @param {new (...args:any[])=>any} child child element constructor
   * @param {string} name
   * @param {any[]} rest required elements
   */
  init(selector, name, child, ...rest) {
    return new child(this.root.$(selector), name, ...rest)
  }

  async sendKeys(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      //console.log(' PAge sendKeys  this[key]=> ', this[key])
      await this[key].sendKeys(data[key])
    }
  }
  async click(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      // await (() => new Promise((res) => setTimeout(res, 3000)))()
      //console.log(' Page click - this[key]', this[key])
      await this[key].click(data[key])
    }
  }
  async get(data) {
    console.log('data in page =>', data)
    const dataKeys = Object.keys(data)
    const getData = {...data}

    for(const key of dataKeys) {
      console.log('before присвоение getData in Page => ', getData)
      console.log('before присвоение getData[key] in Page => ', getData[key])
      console.log('this in Page => ', this)
      console.log('this[key] in Page => ', this[key])
      console.log('data[key] in Page =>', data[key])
      getData[key] = await this[key].get(data[key])
      console.log('after присваивания getData[key] in Page => ', getData[key])
      console.log('after присваивания getData in Page => ', getData)
    }
    return getData
  }
}

module.exports = {
  BasePage
}