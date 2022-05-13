//@ts-check
const {BaseFragment, Button, Input} = require('../../../../lib')

/**
 * @typedef {object} LoginCommonAction
 * @property {null} [username] username
 * @property {null} [password] password
 * @property {null} [signInLog] signInLog
 */

/**
 * @typedef {object} LoginSendKeysAction
 * @property {string|number} [username] username
 * @property {string|number} [password] password
 */

/**
 * @typedef {object} LoginGetResAction
 * @property {string|number} [username] username
 * @property {string|number} [password] password
 */


class LoginFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.init('input[placeholder="Ім\'я користувача"]', 'Username Input', Input);
    this.password = this.init('input[placeholder="пароль"]', 'Password Input', Input)
    this.signInLog = this.init('.btn.btn-primary', 'SignIn button', Button)
  }
}

// const userName = $('input[placeholder = "Ім\'я користувача"]')
// const password = $('input[placeholder = "пароль"]')
// const signInLog = $('.btn.btn-primary')

module.exports = {
  LoginFragment
}