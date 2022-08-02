//@ts-check
const {Collection} = require('./collection')
const {decorateBase} = require('../reporter')
const {isNull} = require('sat-utils')

class BaseFragment {
  /**
  * @param {import('promod').PromodSeleniumElementType} root fragment root
  * @param {string} name fragment name
  */

  constructor(root, name) {
    this.root = root;
    this.name = name;
  }

  /**
    * @param {string} selector css/xpass/js selector
    * @param {string} name child name
    * @param {new (...args:any[])=>any} child child element constructor
    * @param  {any[]} rest rest required argument
    * @returns
    */
  init(selector, name, child, ...rest) {
    //TODO add techical logging
    if(child === Collection) {
      return new child(this.root.$$(selector), name, ...rest)
    }
    else {
      return new child(this.root.$(selector), name, ...rest)
    }
  }
  async sendKeys(data) { // data=> {username:'admin', password:'admin'}
    const dataKeys = Object.keys(data) // dataKeys=> {username, password}

    for(const key of dataKeys) {

      await this[key].sendKeys(data[key]) // login[username].sendKeys(admin)
    }
  }

  async click(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      // console.log('in FRAGM, this[key]=====>', this[key], 'key===>', key)
      await this[key].click(data[key])
    }
  }

  async getData(data) { //data=>LoginFragment{username:'admin', password:'admin'}
    const dataKeys = Object.keys(data) //dataKeys=>{username, password}
    const getData = {...data} //getData=>{username:'admin', password:'admin'} ???!!!
    for(const key of dataKeys) {
      getData[key] = await this[key].getData(data[key]) //getData[key]=>навіть якщо там є значення, його буде переписано; для значення поля username фрагмента Login буде викликано getData: this[key]=> LoginFragment[username].getData(data[key]=>admin); потрапивши до getData елемента ми ніяк не використовуємо саме значення 'admin', але та частина(та локація) куди вона нас привела, тобто до рівня елемента є важливою, бо саме звідти ми можемо дістати, отримати і повернути те значення, яке є у елемента завдяки getText(): await this.root.getText()
    }
    return getData
  }

  async isRequiredItem(data) {
    // data=> SessionItemFragment{username: {_element: 'testName'} }
    // {
    //     field1: '1',
    //     field2: '1',
    // }

    for(const key of Object.keys(data)) { // key => username

      if(! await this[key].isRequiredItem(data[key])) { // SessionItemFragment[username].isRequiredItem(data[key]), де data[key] => SessionItemFragment(т.е.data) [username] => {_element:'testName'}
        return false
      }
    }
    return true
    // console.log('thisResult==>', thisResult, data, Object.keys(data).every(key => thisResult[key] === data[key]))


    // return Object.keys(data).every(key => thisResult[key] === data[key])
  }

  async isDisplayed(data) { // data=>{username:'admin', password:'admin'}
    if(isNull(data)) {
      return this.root.isDisplayed()
    }
    const dataKeys = Object.keys(data) //dataKeys=>{username, password}
    const getData = {...data} //getData=>{username:'admin', password:'admin'} ???!!!
    for(const key of dataKeys) {
      getData[key] = await this[key].isDisplayed(data[key]) //getData[key]=>навіть якщо там є значення, його буде переписано; this[key]=>для значення поля username фрагмента login буде викликано getData=>? this[username].getData(data[key]=>admin)
    }
    return getData
  }
}

decorateBase(BaseFragment, 'getData', (name) => `${name} execute getData`)
decorateBase(BaseFragment, 'click', (name) => `${name} execute click`)
decorateBase(BaseFragment, 'sendKeys', (name) => `${name} execute sendKeys`)

module.exports = {
  BaseFragment
}