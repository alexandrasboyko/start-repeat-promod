// @ts-check
const {BaseFragment} = require('../../../../lib')
/**
 * @typedef {object} HeaderCommonAction
 * @property {null} [signIn] signIn
 * @property {null} [signUp] signUp
*/
class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.signIn = this.root.$('.btn.btn:nth-child(1)')
    this.signUp = this.root.$('.btn.btn:nth-child(2)')
  }
}

module.exports = {
  HeaderFragment
}