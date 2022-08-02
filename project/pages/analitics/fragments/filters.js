//@ts-check
const {BaseFragment, Collection, Text, Button} = require('../../../../lib')

/**
 * @typedef {object} FiltersCommonAction
 * @property {null} [minVolume] minVolume
 * @property {null} [maxVolume] maxVolume
 * @property {null} [minPrice] minPrice
 * @property {null} [maxPrice] maxPrice
 */

/**
 * @typedef {object} FiltersGetResAction
 * @property {string|number} [minVolume] minVolume
 * @property {string|number} [maxVolume] maxVolume
 * @property {string|number} [minPrice] minPrice
 * @property {string|number} [maxPrice] maxPrice
 */

/**
 * @typedef {object} FiltersIsDispResAction
 * @property {boolean} [minVolume] minVolume
 * @property {boolean} [maxVolume] maxVolume
 * @property {boolean} [minPrice] minPrice
 * @property {boolean} [maxPrice] maxPrice
 */


class FiltersFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name);
    this.minVolume = this.init('.work_volume>span:nth-child(1)', 'Min volume', Button)
    this.maxVolume = this.init('.work_volume>span:nth-child(2)', 'Max volume', Button)
    this.minPrice = this.init('.price>span:nth-child(1)', 'Min price', Button)
    this.maxPrice = this.init('.price>span:nth-child(2)', 'Max price', Button)
  }
}


module.exports = {
  FiltersFragment
}