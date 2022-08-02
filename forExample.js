const {seleniumWD} = require('promod')
const {browser, $, $$} = seleniumWD
const {provider} = require('./project')
const {I, client} = provider

// class BaseElement {
//   constructor(selector, name, rootElm) {
//     this.selector = selector;
//     this.name = name;
//     this.rootElm = $(rootElm)
//   }
// }

// class Collection {
//   constructor(selector, name, rootElms) {
//     this.selector = selector;
//     this.name = name;
//     this.rootElms = $$(rootElms)
//   }

// }

class BasePage {
  constructor(selector, name, pageRoot) {
    this.selector = selector
    this.name = name
    this.pageRoot = $(pageRoot)
  }
}

class AnaliticsPage extends BasePage {
  constructor() {
    super()

  }
}

class BaseFragment2 {
  constructor(selector, name, rootElm) {
    this.selector = selector;
    this.name = name;
    this.rootElm = $(rootElm)
  }
}

class AnalitHeader extends BaseFragment2 {
  constructor() {
    super('.header', 'Header', '.header')
  }
}
const analit = new AnalitHeader()


it('[P] navigate to analiticsHeader', async () => {
  const userData = {username: 'admin', password: 'admin'}
  await browser.get('http://localhost:4000/');
  await I.loginToSystem(userData)
  await I.navigateToAnalitic()
})

it('[P] check title', async () => {
  const userData = {username: 'admin', password: 'admin'}
  await browser.get('http://localhost:4000/');
  await I.loginToSystem(userData)
  await I.navigateToAnalitic()
  await I.checkTitleOnAnaliticPage()
})