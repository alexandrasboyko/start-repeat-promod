//@ts-check
const {seleniumWD} = require('promod');
const {$} = seleniumWD
const {decorateBase} = require('../reporter/index')
const {isObject, isPrimitive, isString, waitForCondition} = require('sat-utils')
const {isEqual} = require('./utils')

class BasePage {

  /**
   * @param {string} selector page root selector
   * @param {string} name page name
   */
  constructor(selector, name) {
    this.selector = selector;
    this.name = name;
    this.root = $(this.selector)
  }

  /**
   * @param {string} selector css/xpath/js selector
   * @param {string} name child name
   * @param {new (...args:any[])=>any} child child element constructor
   * @param  {any[]} rest rest required argument
   * @returns
   */

  init(selector, name, child, ...rest) {
    return new child(this.root.$(selector), name, ...rest)
  }

  async sendKeys(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      // console.log('this[key] in data=>', this[key])
      await this[key].sendKeys(data[key])
    }
  }

  async click(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys)
      await this[key].click(data[key])
  }

  async getData(data) {
    const dataKeys = Object.keys(data)
    const getData = {...data} // data => {login{username:"admin", password:"admin"}}; {...data}=>{login}
    for(const key of dataKeys) {
      getData[key] = await this[key].getData(data[key]) // getData[key]=> {username:"admin", password:"admin"};
      // data[key]=>{username:"admin", password:"admin"}.getData({username:"admin", password:"admin"})
      //getData[key]=>навіть якщо там є значення, його буде переписано; для значення ключа login сторінки MainPage буде викликано getData[key]: this[key]=> MainPage[Login].getData(data[key]=>{username:"admin", password:"admin"}); потрапивши до фрагмента, тобто до тієї частини (тієї локації), куди завдяки getData ми потрапили, тобто до рівня фрагмента, бо саме звідти ми можемо дістати, отримати і повернути те значення для сторінки, яке ми спершу отримаємо у фрагмента, завдяки getData:
    }
    return getData
  }

  async isDisplayed(data) {
    console.log('data in Displayed=>', data)
    const dataKeys = Object.keys(data) //dataKeys => [login]
    const getData = {...data} // data => {login{username:"admin", password:"admin"}}; {...data}=>{login}
    for(const key of dataKeys) {
      getData[key] = await this[key].isDisplayed(data[key]) // getData[key]=> {username:"admin", password:"admin"};
    }
    console.log('on Page isDisplayed=>', getData)
    return getData
  }

  async waitForPageState(data) {
    console.log('in start=====>', data)
    function checkThatStringsInData(dataObj) { //1.{ header: { isAdminMarker: true } };  4.1 {isAdminMarker:true} !!!
      console.log('data 1=>', dataObj)
      for(const key of Object.keys(dataObj)) { //2. key = header, 4.2 key = isAdminMarker
        console.log('key=>', key)
        console.log('in for dataObj[key]', dataObj[key])
        if(isObject(dataObj[key])) { //3. {header:{ isAdminMarker: true }}[header] => {isAdminMarker:true}=>isObject({isAdminMarker:true}) => true
          // 4.3 {isAdminMarker: true}[isAdminMarker] => isObject(true) => false
          console.log('in if dataObj[key]=>', dataObj[key])
          const result = checkThatStringsInData(dataObj[key]) //4. перемещение на шаг 1.
          console.log('result', result)
          if(result) {
            console.log('result', result)
            return true
          }

        } else if(isPrimitive(dataObj[key]) && isString(dataObj[key])) {
          console.log('else if dataObj[key]', dataObj[key])
          return true
        }
      }
      console.log('in end=>', dataObj)

      return false
    }

    const conditionToCall = checkThatStringsInData({...data}) ? 'getData' : 'isDisplayed' //  'checkThatStringsInData({...data}) ?'=> це перший крок, адже функція має бути викликаною, для того, щоб запустити виконання checkThatStringsInData
    console.log('conditionToCall=>', conditionToCall)
    console.log('data 3=>', data)     //  !!!!!!

    await waitForCondition(async () => {

      console.log('!!!!!!wait for condition')

      const thisCallResult = await this[conditionToCall]({...data})

      console.log('thisCallResult=>', thisCallResult)
      // const thisCallResult = {'getData': async function(..){..}}, console.log(this['getData']) --> результат виконання функції getData
      return isEqual(thisCallResult, data)
    }, {timeout: 15_000, message: `${this.name} should have condition ${JSON.stringify(data)}`})
  }


}


decorateBase(BasePage, 'getData', (name) => `${name} execute getData`)
decorateBase(BasePage, 'click', (name) => `${name} execute click`)
decorateBase(BasePage, 'sendKeys', (name) => `${name} execute sendKeys`)
decorateBase(BasePage, 'waitForPageState', (name) => `${name} execute waitForPageState`)

module.exports = {
  BasePage
}