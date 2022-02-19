// @ts-check
class BaseFragment {
  /**
   *
   * @param {import ('promod').PromodSeleniumElementType} root fragment-root
   * @param {string} name fragment name
   */

  constructor(root, name) {
    this.root = root;
    this.name = name;
  }

  async sendKeys(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      //await (() => new Promise((res) =>
      //setTimeout(res, 1500)))()
      // console.log('frag this[key]=> ', this[key])
      // console.log('data[key]=> ', data[key])
      await this[key].sendKeys(data[key])
    }
  }
  async click(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      //console.log(' frag this[key]=> ', this[key])
      // await (() => new Promise((res) => setTimeout(res, 4000)))()
      await this[key].click()
    }
  }
  async get(data) {
    console.log('data in frag=> ', data)
    const dataKeys = Object.keys(data)
    const getData = {...data}
    for(const key of dataKeys) {
      console.log('before присвоение getData in fragm => ', getData)
      console.log('before присвоение getData[key] in fragm => ', getData[key])
      console.log(' this[key] in fragm => ', this[key])
      console.log('this[key].getText()', this[key].getText())


      getData[key] = await this[key].getText()
      console.log('after присвоение getData[key] in fragm => ', getData[key])
      console.log('after присваивания getDate in frag =>', getData)
    }
    return getData
  }
}

module.exports = {
  BaseFragment
}