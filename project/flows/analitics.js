const {pageProvider} = require('../pages/pageProvider')
const {tables} = pageProvider
const {analytics} = pageProvider
const {isBoolean} = require('sat-utils')
const {expect} = require('assertior')
const {client} = require('../../lib')

// /**
//  * @param {string} username username
//  * @param {boolean} isAdmin
//  * @returns {Promise<void>}
//  */
// async function checkThatUserLoggedInSystemOnAnaliticsPage(username, isAdmin) {
//   let greetingMessage = `Аналітика, Привіт ${username}`

//   if(isBoolean(isAdmin)) {
//     await analytics.waitForPageState({header: {isAdminMarker: isAdmin}})
//     // console.log(tables.waitForPageState({header: isAdminMarker))
//     greetingMessage += isAdmin ? '*' : ''
//     console.log('greetingMessage=>', greetingMessage)
//   }
//   await tables.waitForPageState({header: {greetingMessage}})
// }

async function checkTitleOnAnaliticPage() {
  const {header: {greetingMessage}} = await analytics.getData({header: {greetingMessage: null}})
  console.log({greetingMessage})
}

async function isDisplayedHeadersBtn(button) {
  //button => greetingMessage або toTables або toCombaines або toAdmin або logOut
  const state = await analytics.isDisplayed({header: {[button]: null}})
  //const {header: {toAdmin}} = await analytics.isDisplayed({header: {toAdmin: null}})
  console.log('state=> ', state.header[button])
  //console.log('toAdmin=> ', toAdmin)
}

async function getDataFromHeadersBtn(button) {
  //button => greetingMessage або toTables або toCombaines або toAdmin або logOut
  const state = await analytics.getData({header: {[button]: null}})
  //const {header: {toAdmin}} = await analytics.isDisplayed({header: {toAdmin: null}})
  console.log('state=> ', state.header[button])
  //console.log('toAdmin=> ', toAdmin)
}

// async function clickOnFiltersToOpenModal() {
// await analytics.click({filters: {maxPrice: null}})

// const result = await analytics.getData({filters: {minPrice: null}})
// console.log('result=>', result)

// const state = await analytics.isDisplayed({filters: {maxVolume: null}})

// const title = await analytics.getData({modal: {title: null}})
// const textVolume = await analytics.getData({modal: {workVolume: null}})
// console.log(title, textVolume)
// await analytics.click({modal: {close: null}})

// await analytics.isDisplayed({modal: {close: null}})
// const a = await analytics.isDisplayed({modal: {price: null}})
// console.log('a==>', a)
// console.log('throw error')
async function checkMinMorkVolumeFilterDataInModalWindow() {

  const {filters: {minVolume}} = await analytics.getData({filters: {minVolume: null}})
  const {modal: {close}} = await analytics.isDisplayed({modal: {close: null}})

  if(!close)
  // спочатку відображення того контента,який необхідний першим
  // згодом після того,як перший контент відобразився і всі функції з ним виконано, переходимо до
  //---------тут має бути пауза-------------

  //---------як ця пауза має виглядати?------

  //---------- пауза знаходиться і чекає якийсь час на першій сторінкі ------------поки будуть зібрані дані, ----------потім необхідно перейти до

  // відкриття нового контенту модального вікна
  // дії з новим модальним вікном

  {
    await analytics.click({filters: {minVolume: null}})
  }
  const {modal: {workVolume}} = await analytics.getData({modal: {workVolume: null}})

  console.log(minVolume, workVolume)

}




// }


module.exports = {
  checkTitleOnAnaliticPage, isDisplayedHeadersBtn, getDataFromHeadersBtn, checkMinMorkVolumeFilterDataInModalWindow// clickOnFiltersToOpenModal
}