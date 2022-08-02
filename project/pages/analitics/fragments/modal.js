//@ts-check
const {BaseFragment, Collection, Text, Button} = require('../../../../lib')

/**
 * @typedef {object} ModalCommonAction
 * @property {null} [title] title
 * @property {null} [manufacturer] manufacturer
 * @property {null} [workVolume] workVolume
 * @property {null} [length] length
 * @property {null} [width] width
 * @property {null} [weight] weight
 * @property {null} [tractionForce] tractionForce
 * @property {null} [price] price
 * @property {null} [close] close
 */

/**
 * @typedef {object} ModalGetResAction
 * @property {string|number} [title] title
 * @property {string|number} [manufacturer] manufacturer
 * @property {string|number} [workVolume] workVolume
 * @property {string|number} [length] length
 * @property {string|number} [width] width
 * @property {string|number} [weight] weight
 * @property {string|number} [tractionForce] tractionForce
 * @property {string|number} [price] price
 */

/**
 * @typedef {object} ModalIsDispResAction
 * @property {boolean} [title] title
 * @property {boolean} [manufacturer] manufacturer
 * @property {boolean} [workVolume] workVolume
 * @property {boolean} [length] length
 * @property {boolean} [width] width
 * @property {boolean} [weight] weight
 * @property {boolean} [tractionForce] tractionForce
 * @property {boolean} [price] price
 * @property {boolean} [close] close
 */

class ModalFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name);
    this.title = this.init('h1', 'Title', Text)
    this.manufacturer = this.init('.modal>div:nth-child(3)', 'Manufacturer', Text)
    this.workVolume = this.init('.modal>div:nth-child(4)', 'Work Volume', Text)
    this.length = this.init('.modal>div:nth-child(5)', 'Length', Text)
    this.width = this.init('.modal>div:nth-child(6)', 'Width', Text)
    this.weight = this.init('.modal>div:nth-child(7)', 'Weight', Text)
    this.tractionForce = this.init('.modal>div:nth-child(8)', 'Traction Force', Text)
    this.price = this.init('.modal>div:nth-child(9)', 'Price', Text)
    this.close = this.init('.close', 'Close Window', Button)
  }
}

module.exports = {
  ModalFragment
}