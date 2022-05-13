//@ts-check
const {BaseFragment, Button} = require('../../../../lib')

/**
 * @typedef {object} HeaderCommonAction
 * @property {null} [signIn] signIn
 * @property {null} [signUp] signUp
 */

class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.signIn = this.init('.btn:nth-child(1)', 'SignIn', Button);
    this.signUp = this.init('.btn:nth-child(2)', 'SignUp', Button);
  }
}

// const signIn = $$('.btn.btn-secondary').get(0)
// const signUp = $$('.btn.btn-secondary').get(1)

module.exports = {
  HeaderFragment
}