//@ts-check
const {Collection} = require('../../../../lib')
const {MessageFormFragment} = require('../../shared_fragments/message.form')
const {SessionItemFragment} = require('./session.item')


/**
 * @typedef {import ('./session.item').SessionItemCommonAction} SessionItemCommonAction
 * @typedef {import ('./session.item').SessionItemGetResAction} SessionItemGetResAction
 *
 * @typedef {import ('../../shared_fragments/message.form').MessageFormCommonAction} MessageFormCommonAction
 * @typedef {import ('../../shared_fragments/message.form').MessageFormSendKeysAction} MessageFormSendKeysAction
 */

/**
 * @typedef {MessageFormSendKeysAction} AdminMessageFormSendKeys
 */

/**
 * @typedef {{sessions?: {index:number, action:SessionItemCommonAction} & SessionItemGetResAction} }ExtendedAdminMessageFormCommonAction
 */

/**
 * @typedef {MessageFormCommonAction & ExtendedAdminMessageFormCommonAction} AdminMessageFormCommonAction
 */

/**
 *@typedef {object} MessageFormGetResAction
 *@property {SessionItemGetResAction[]} [sessions] newUser
 */

class AdminMessageFormFragment extends MessageFormFragment {
  constructor(root, name) {
    super(root, name)
    this.sessions = this.init('.text-left > button', 'Session', Collection, SessionItemFragment)
  }
}

module.exports = {
  AdminMessageFormFragment
}