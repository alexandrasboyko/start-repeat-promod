//@ts-check
const {BaseFragment, Button} = require('../../../../lib')
/**
 *@typedef {object} TogglersCommonAction
 *@property {null} [newUser] new user
 *@property {null} [usersList] users list
 */

/**
 *@typedef {object} TogglersGetResAction
 *@property {string} [newUser] new user
 *@property {string} [usersList] usersList
 */

class Togglers extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.newUser = this.init('button:nth-child(1)', 'New User', Button)
    this.usersList = this.init('button:nth-child(2)', 'Users List', Button)
  }
}

module.exports = {
  Togglers
}