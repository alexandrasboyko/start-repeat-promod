//@ts-check
const {BaseFragment, Collection} = require('../../../../lib')

/**
 *@typedef {object} UserItemFragmentCommonAction
 *@property {null} [username] username
 *@property {null} [details] details
 */

/**
 *@typedef {object} UserItemFragmentGetResAction
 *@property {string} [username] username
 *@property {string} [details] details
 */

class UserItemFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.init('.user_item_username', 'New User', Button)
    this.details = this.init('.button', 'Users List', Button)
  }
}

module.exports = {
  UserItemFragment
}