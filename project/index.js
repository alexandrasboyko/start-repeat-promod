const {I} = require('./flows')
const {client} = require('../lib')

const provider = {
  get I() {
    return I
  },
  get client() {
    return client
  }
}

module.exports = {
  provider
}