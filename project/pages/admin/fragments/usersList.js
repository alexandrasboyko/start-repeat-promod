//@ts-check
const {BaseFragment, Collection} = require('../../../../lib')
const {UserItemFragment} = require('./users.item')

/**
 *@typedef {import ('../fragments/users.item').UserItemCommonAction} UserItemCommonAction
 *@typedef {import ('../fragments/users.item').UserItemGetResAction} UserItemGetResAction
 */

/**
 * @typedef {object} UsersListCommonAction
 * @property {{index?:number, action:UserItemCommonAction} & UserItemGetResAction} [users] users items
 */

/**
 * @typedef {object} UsersListGetResAction
 * @property {UserItemGetResAction[]} [users] users items
 */

class UsersListFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.users = this.init('.user_item', 'User Item Line', Collection, UserItemFragment)
  }
}

module.exports = {
  UsersListFragment
}
