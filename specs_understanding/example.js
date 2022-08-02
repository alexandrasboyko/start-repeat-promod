const {seleniumWD} = require('promod')
const {BaseElement, BaseFragment} = require('../lib')

const {$, getSeleniumDriver, browser} = seleniumWD

class MyFragment extends BaseFragment {

  constructor() {
    super($('#test'), 'My element')

    this.field1 = this.init('.field1', 'f1', BaseElement)
    this.field2 = this.init('.field2', 'f2', BaseElement)
  }
}




const myFragment = new MyFragment()

test()
async function test() {
  try {
    await getSeleniumDriver(browser)

    const elemen = new BaseElement($('.field1'), 'Field 1')


    await browser.get('file:///C:/Users/Alexandra/Documents/start-repeat-promod/specs_understanding/misc/index.html')

    // const res = await elemen.isRequiredItem( '1')

    // const res = await myFragment.getData({field1: null})


    const result = await myFragment.isRequiredItem({
      field1: '1',
      field2: '1',
    })




    console.log(result, '<<<<<<<<<<<<<<<<<<<<<<')
  } finally {
    await browser.quitAll()
  }

}