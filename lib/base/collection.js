//@ts-check
const {isNumber} = require('sat-utils')


class Collection {
  constructor(rootEls, name, childItem) {
    this.rootEls = rootEls;
    this.name = name;
    this.childItem = childItem;
  }

  async getData({index, action, ...rest}) {
    if(isNumber(index)) {
      return [await new this.childItem(await this.rootEls.get(index)).getData(action)]
    }
    else if(Object.keys(rest).length) {
      return [await (await this.findChild(rest)).getData(action)]
    }
    else {
      const results = []
      console.log(await this.rootEls.count())
      await this.rootEls.each(async (elementRoot) => {
        const childInstance = new this.childItem(elementRoot, this.name)
        results.push(await childInstance.getData(action))
      })

      return results;
    }
  }

  /**
   * @param {object} data data
   * @param {number} [data.index] index
   * @param {any} [data.action] action
   * @returns
   */
  async click({index, action, ...rest} = {}) {
    // {action: {username: null}, username: {username:'jkgkjgkj'} }
    console.log('index==>', index, 'action==>', action)
    if(isNumber(index)) {
      return new this.childItem(this.rootEls.get(index), `${this.name} ${index}`).click(action)
    }
    else if(Object.keys(rest).length) {
      console.log('rest==>', rest)
      return (await this.findChild(rest)).click(action)
    }
  }

  /**
   * @private
   */
  async findChild(itemDescriptor) {
    const itemsCounts = await this.rootEls.count()
    console.log('itemsCounts==>', itemsCounts)
    console.log('itemDescriptor==>', itemDescriptor)

    for(let i = 0; i < itemsCounts; i++) {
      const childInstance = new this.childItem(this.rootEls.get(i), `${this.name} ${i}`)
      // console.log('childInstance==>', )
      if(await childInstance.isRequiredItem(itemDescriptor)) {
        return childInstance
      }
    }
    throw new Error(`Element was not found, check your ${JSON.stringify(itemDescriptor)} `)
  }
}

module.exports = {
  Collection
}