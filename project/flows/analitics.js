const {pageProvider} = require('../pages/pageProvider')
const {analytics} = pageProvider
const {isBoolean} = require('sat-utils')
const {expect} = require('assertior')
const {client} = require('../../lib')
const {isEqual} = require('../../lib')
const {tables} = pageProvider


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


async function checkMinOrMaxWorkVolumeFilterDataInModalWindow(minOrMaxVolume, updatedMinOrMaxVolume) {

  const state = await analytics.getData({filters: {[minOrMaxVolume]: null}})
  const {modal: {close}} = await analytics.isDisplayed({modal: {close: null}})
  // спочатку відображення того контента,який необхідний першим
  // згодом після того,як перший контент відобразився і всі функції з ним виконано, переходимо до
  //---------тут має бути пауза-------------
  //---------як ця пауза має виглядати?------
  //---------- пауза знаходиться і чекає якийсь час на першій сторінкі ------------поки будуть зібрані дані, ----------потім необхідно перейти до
  // відкриття нового контенту модального вікна
  // дії з новим модальним вікном
  if(!close) {
    await analytics.click({filters: {[minOrMaxVolume]: null}})
  }
  const {modal: {workVolume}} = await analytics.getData({modal: {workVolume: null}})
  const workVolumeNum = workVolume.toString().match(/\d.+/)[0] // match(/\d.+/) дозволяє отримати дійсне число
  console.log('minOrMaxVolume==>', state.filters[minOrMaxVolume], 'workVolume==>', workVolume, updatedMinOrMaxVolume)

  const comparisonResult = isEqual(+state.filters[minOrMaxVolume], +workVolumeNum, +updatedMinOrMaxVolume)
  expect(comparisonResult).toEqual(true, 'Filters value should be equal to modal value')
}

async function checkMinOrMaxPriceFilterDataInModalWindow(minOrMaxPrice, updatedMinOrMaxPrice) {

  const state = await analytics.getData({filters: {[minOrMaxPrice]: null}})
  const {modal: {close}} = await analytics.isDisplayed({modal: {close: null}})

  if(!close) {
    await analytics.click({filters: {[minOrMaxPrice]: null}})
  }
  const {modal: {price}} = await analytics.getData({modal: {price: null}})
  console.log(price)
  const priceNum = price.toString().match(/\d.+/)[0] // match(/\d.+/) дозволяє отримати дійсне число, тобто неціле число
  console.log('minOrMaxPrice==>', state.filters[minOrMaxPrice], 'price==>', priceNum)
  const comparisonResult = isEqual(+state.filters[minOrMaxPrice], +priceNum, +updatedMinOrMaxPrice)
  expect(comparisonResult).toEqual(true, 'Filters value should be equal to modal value')

}

//спочатку зібрати дані, що вже є на сторінкі аналітики
//додана нова машина на сторінкі tables
//перевірити чи з'явилась|відобразилась ця нова інформація на сторінкі analitics:
//в полі кількість машин
//чи змінилось щось в полі роб.об'єм? Де змінилось: в його мін чи макс значенні? чи і там, і там?
//чи змінилось щось в полі ціни? Де змінилось: в її мін чи макс значенні? чи і там, і там?


/**
 * @param {string|string[]} filds
 */
async function getFiltersData(filds) { //дивлячись які дані прийдуть, буде це масив строк чи строка ми отримуємо об'єкт з даними зі сторінки аналітика в підсумковому об'єкті filtersValues
  const filtersValues = {}
  const interactionFields = Array.isArray(filds) ? filds : [filds]; // [ minPrice, maxPrice] або minWorkVolume

  for(const filed of interactionFields) { // 1.ітерація, const filed = minPrice з масиву або minWorkVolume

    const {filters} = await analytics.getData({filters: {[filed]: null}}) // 1. {filters:{minPrice:'Ціна 688255'}} або
    //{filters: {minWorkVolume: 'Робочий об'єм 3.7'}}

    filtersValues[filed] = +filters[filed] //1. filtersValues[filed] = {minPrice:688255} або filtersValues[filed] = {minWorkWolume: 37}; 2.ітерація, якщо масив прийшов в аргумент - буде {minPrice:688255, maxPrice:1430200}
    console.log('filtersValues==>', filtersValues)
    //
  }

  return filtersValues // {minPrice:688255, maxPrice:1430200} або {minWorkWolume: 37}
}


async function navigateToTables() {
  await analytics.click({header: {toTables: null}})
}

// async function checkChangesOnAnaliticPage(minOrMaxPrice) {

//   const state = await analytics.getData({filters: {[minOrMaxPrice]: null}})
//   console.log('state==>', state)
//   await client.sleep(7000)
//   await analytics.click({header: {toTables: null}})
//   await tables.sendKeys({addNewMachine: {manufacturer: '3', workVolume: '3', width: '3', length: '3', mass: '3', tractorPower: '3', price: state.filters[minOrMaxPrice] - 1}})
//   await client.sleep(7700)
//   await tables.click({addNewMachine: {addBtn: null}})
//   await tables.click({header: {toAnalitics: null}})

//   const state2 = await analytics.getData({filters: {[minOrMaxPrice]: null}})
//   const {modal: {close}} = await analytics.isDisplayed({modal: {close: null}})
//   if(!close) {
//     await analytics.click({filters: {[minOrMaxPrice]: null}})
//   }
//   const {modal: {price}} = await analytics.getData({modal: {price: null}})
//   const priceNum = price.toString().match(/\d.+/)[0] // match(/\d.+/) дозволяє отримати дійсне число
//   console.log('minOrMaxPrice==>', state2.filters[minOrMaxPrice], 'price==>', priceNum)
//   await isEqual(state2.filters[minOrMaxPrice], priceNum)

// }

module.exports = {
  checkTitleOnAnaliticPage, isDisplayedHeadersBtn, getDataFromHeadersBtn, checkMinOrMaxWorkVolumeFilterDataInModalWindow,
  checkMinOrMaxPriceFilterDataInModalWindow,
  getFiltersData,
  navigateToTables

}