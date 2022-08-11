//@ts-check
const {BaseFragment, Input, Button} = require('../../../../lib')

/**
 * @typedef {object} NewMachineFormCommonAction
 * @property {null} [manufacturer] manufacturer
 * @property {null} [workVolume] workVolume
 * @property {null} [length] length
 * @property {null} [width] width
 * @property {null} [mass] mass
 * @property {null} [tractorPower] tractorPower
 * @property {null} [price] price
 * @property {null} [addBtn] addBtn
 */

/**
 * @typedef {object} NewMachineFormGetResAction
 * @property {string} [manufacturer] manufacturer
 * @property {string} [workVolume] workVolume
 * @property {string} [length] length
 * @property {string} [width] width
 * @property {string} [mass] mass
 * @property {string} [tractorPower] tractorPower
 * @property {string} [price] price
 * @property {string} [addBtn] addBtn
 */

/**
 * @typedef {object} NewMachineFormIsDispResAction
 * @property {boolean} [manufacturer] manufacturer
 * @property {boolean} [workVolume] workVolume
 * @property {boolean} [length] length
 * @property {boolean} [width] width
 * @property {boolean} [mass] mass
 * @property {boolean} [tractorPower] tractorPower
 * @property {boolean} [price] price
 * @property {boolean} [addBtn] addBtn
 */

/**
 * @typedef {object} NewMachineFormSendKeysAction
 * @property {string|number} [manufacturer] manufacturer
 * @property {string|number} [workVolume] workVolume
 * @property {string|number} [length] length
 * @property {string|number} [width] width
 * @property {string|number} [mass ] mass
 * @property {string|number} [tractorPower] tractorPower
 * @property {string|number} [price] price
 */

class NewMachineFormFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.manufacturer = this.init('.add_machine input[placeholder="Виробник"]', 'Manufacturer', Input);
    this.workVolume = this.init('.add_machine input[placeholder="Робочий об\'єм"]', 'Work Volume', Input)
    this.length = this.init('.add_machine input[placeholder="Довжина"]', 'Length', Input)
    this.width = this.init('.add_machine input[placeholder="Ширина"]', 'Width', Input)
    this.mass = this.init('.add_machine input[placeholder="Маса"]', 'Mass', Input)
    this.tractorPower = this.init('.add_machine input[placeholder="Потужність трактора"]', 'Tractor Power', Input)
    this.price = this.init('.add_machine input[placeholder="Ціна"]', 'Price', Input)
    this.addBtn = this.init('.btn.btn-success', 'Add new machine bbt', Button)
  }
}

// const signIn = $$('.btn.btn-secondary').get(0)
// const signUp = $$('.btn.btn-secondary').get(1)

module.exports = {
  NewMachineFormFragment
}