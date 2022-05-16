//@ts-check
const {BaseFragment} = require('../../../../lib')
const {UserItemFragment} = require('./users.item')
const {Collection} = require('../../../../lib')

class UsersListFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.users = this.init('.user_item_username', 'Users', Collection, UserItemFragment)
  }
}


module.exports = {
  UsersListFragment
}