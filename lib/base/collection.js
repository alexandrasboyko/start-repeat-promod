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
      await this.rootEls.each(async (elementRoot) => {
        const childInstance = new this.childItem(elementRoot, this.name)
        results.push(await childInstance.getData(action))
      })
    }
  }
  /**
   * @private
   */
  async findChild(itemDescriptor) {
    const itemCounts = await this.rootEls.count()

    console.log('itemDescriptor==>', itemDescriptor)

    for(let i = 0; i < itemCounts; i++) {
      const childInstance = new this.childItem(this.rootEls.get(i), `${this.name} ${i}`)
      if(await childInstance.isRequired(itemDescriptor)) {
        return childInstance
      }
    }
    throw new Error(`Element was not found, check your ${JSON.stringify(itemDescriptor)} `)
  }
}

module.exports = {
  Collection
}