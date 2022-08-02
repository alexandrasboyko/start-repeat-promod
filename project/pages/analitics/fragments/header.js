//@ts-check
const {BaseFragment, Text, Button} = require('../../../../lib')

/**
 * @typedef {object} HeaderCommonAction
 * @property {null} [greetingMessage] greetingMessage
 * @property {null} [toTables] toTables
 * @property {null} [toCombaines] toCombaines
 * @property {null} [toAdmin] toAdmin
 * @property {null} [logOut] logOut
 */

/**
 * @typedef {object} HeaderGetResAction
 * @property {string} [greetingMessage] greetingMessage
 * @property {string} [toTables] toTables
 * @property {string} [toCombaines] toCombaines
 * @property {string} [toAdmin] toAdmin
 * @property {string} [logOut] logOut
 */

/**
 * @typedef {object} HeaderIsDispResAction
 * @property {boolean} [greetingMessage] greetingMessage
 * @property {boolean} [toTables] toTables
 * @property {boolean} [toCombaines] toCombaines
 * @property {boolean} [toAdmin] toAdmin
 * @property {boolean} [logOut] logOut
 */


class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.greetingMessage = this.init('h3', 'Greeting message', Text);
    this.toTables = this.init('a[href="/tables"] button', 'To Tables Page', Button)
    this.toCombaines = this.init('a[href="/combaines"] button', 'To Combaines Page', Button)
    this.toAdmin = this.init('a[href="/admin"]', 'To Admin Page', Button)
    this.logOut = this.init('.btn.btn-primary.logout', 'To Analitics Page', Button)
  }
}


module.exports = {
  HeaderFragment
}