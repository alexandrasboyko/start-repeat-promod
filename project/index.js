//@ts-check

const {I} = require('./flows')
const {client, it} = require('../lib')
const {adminCreds} = require('./application')

it.initFixtures({adminCreds}) // ------> вона може знаходитись в будь - якому місці, тобто файлі проекту, це не впливає на результат

const provider = {
  get I() {
    return I
  },
  get client() {
    return client
  },
  get testRunner() {
    return {it}
  }
}


module.exports = {
  provider
}