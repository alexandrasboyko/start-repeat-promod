//@ts-check
const {BaseFragment, Button, Input} = require('../../../../lib')
/**
 *@typedef {object} RegistrationCommonAction
 *@property  {null} [usernameReg] usernameReg
 *@property  {null} [nameReg] nameReg
 *@property  {null} [emailReg] emailReg
 *@property {null} [passwordReg] passwordReg
 *@property  {null} [signUpReg] signUpReg
 */

/**
 *@typedef {object} RegistrationSendKeysAction
 *@property  {string|number} [usernameReg] usernameReg
 *@property  {string|number} [nameReg] nameReg
 *@property  {string|number} [emailReg] emailReg
 *@property {string|number} [passwordReg] passwordReg
 */


class RegistrationFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.usernameReg = this.init('input[placeholder="Ім\'я користувача"]', 'Username field', Input);
    this.nameReg = this.init('input[placeholder="Ім\'я"]', 'Personal name field', Input);
    this.emailReg = this.init('input[placeholder="Імейл"]', 'Email field', Input);
    this.passwordReg = this.init('input[placeholder="пароль"]', 'Password field', Input);
    this.signUpReg = this.init('.btn.btn-primary', 'Sign Up button', Button);
  }
}

// const userNameReg = $('input[placeholder = "Ім\'я користувача"]')
// const nameReg = $('input[placeholder = "Ім\'я"]')
// const emailReg = $('input[placeholder = "Імейл"]')
// const passwordReg = $('input[placeholder = "пароль"]')
// const signUpReg = $('.btn.btn-primary')

module.exports = {
  RegistrationFragment
}