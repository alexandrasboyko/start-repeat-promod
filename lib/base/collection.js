//@ts-check
const {isNumber} = require('sat-utils')

class Collection {
  /**
   * @param {import ('promod').PromodSeleniumElementsType} rootEls
   * @param {string} name
   * @param {new(...args:any[])=>any} childItem
   */
  constructor(rootEls, name, childItem) {

    this.rootEls = rootEls;
    this.name = name;
    this.childItem = childItem
  }
  /**
   * @param {object} data
   * @param {number} data.index
   * @param {any} data.action
   */
  async getData({index, action, ...rest}) {
    if(isNumber(index)) {
      return [new this.childItem(this.rootEls.get(index), `${this.name} ${index}`).get(action)] ///getDAta(action) ??
    }
    else if(Object.keys(rest).length) {
      return [(await this.findChild(rest)).get(action)]//getDAta(action) ??
    }
    else {
      const results = []
      await this.rootEls.each(async (childRootElement) => {
        const childItem = new this.childItem(childRootElement, this.name)
        results.push(await childItem.get(action)) //getData
      })
      return results
    }
  }
  /**
   *@private
   */
  async findChild(itemDescriptor) {
    const elementsCount = await this.rootEls.count()
    for(let i = 0; i < elementsCount; i++) {
      const childInstance = new this.childItem(this.rootEls.get(i), `${this.name} ${i}`)
      if(await childInstance.isRequiredItem(itemDescriptor)) {
        return childInstance
      }
      else {
        throw new Error(`Child Element in collection was not found, check your ${JSON.stringify(itemDescriptor)}`)
      }
    }
  }
}