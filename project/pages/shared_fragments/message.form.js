//@ts-check
const {BaseFragment, Collection, Input, Button} = require('../../../lib')
const {MessageItemFragment} = require('./message.item')

/**
 * @typedef {import('./message.item').MessageItemCommonAction} MessageItemCommonAction
 * @typedef {import('./message.item').MessageItemGetResAction} MessageItemGetResAction
 */

/**
 * @typedef {object} MessageFormSendKeysAction
 * @property {string} [username] username
 * @property {string} [content] content
 */

/**
 * @typedef {object} MessageFormCommonAction
 * @property {{index?:number; action: MessageItemCommonAction} & MessageItemGetResAction} [myMessages] myMessages
 * @property {{index?:number; action: MessageItemCommonAction} & MessageItemGetResAction} [adminMessages] adminMessages
 * @property {null} [username] username
 * @property {null} [content] content
 * @property {null} [send] send
 * @property {null} [refresh] refresh
 */


/**
 * @typedef {object} MessageFormGetResAction
 * @property {MessageItemCommonAction[]} [myMessages] myMessages
 * @property {MessageItemCommonAction[]} [adminMessages] adminMessages
 * @property {string} [username] username
 * @property {string} [content] content
 * @property {string} [send] send
 * @property {string} [refresh] refresh
 */


class MessageFormFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.myMessages = this.init('.message_body.text-right', 'My Message', Collection, MessageItemFragment)
    this.adminMessages = this.init('.message_body.text-left', 'Admin Message', Collection, MessageItemFragment)
    this.username = this.init('#feedback_name', 'My username', Input);
    this.content = this.init('#feedback_content', 'My content message', Input)
    this.send = this.init('.input-group-append :nth-child(1)', 'Send message', Button)
    this.refresh = this.init('.input-group-append button:nth-child(2)', 'Refresh messages', Button)
  }
}

module.exports = {
  MessageFormFragment
}