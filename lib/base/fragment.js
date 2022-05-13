//@ts-check


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
    return new child(this.root.$(selector), name, ...rest)
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
      console.log('in FRAGM, this[key]=====>', this[key], 'key===>', key)
      await this[key].click(data[key])
    }
  }

  async getData(data) { //data=>{username:'admin', password:'admin'}
    const dataKeys = Object.keys(data) //dataKeys=>{username, password}
    const getData = {...data} //getData=>{username:'admin', password:'admin'} ???!!!
    for(const key of dataKeys) {
      getData[key] = await this[key].getData(data[key]) //getData[key]=>навіть якщо там є значення, його буде переписано; this[key]=>для значення поля username фрагмента login буде викликано getData=>? this[username].getData(data[key]=>admin)
    }
    return getData
  }

}

module.exports = {
  BaseFragment
}