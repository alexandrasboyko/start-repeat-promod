// @ts-check

const {provider} = require('../project')
const {client, I} = provider

describe('test', () => {
  const userData = {username: 'admin', password: 'admin'}

  // it('test it', async () => {
  //   await client.get('http://localhost:4000/')
  //   await I.loginToSystem({username: 'admin', password: 'admin'})
  //   await client.sleep(13500)
  // })
  // it('test it', async () => {
  //   await client.get('http://localhost:4000/')
  //   await I.registerInSystem({nameReg: 'admin1', usernameReg: 'admin1', emailReg: 'admin1@admin', passwordReg: 'admin1'})
  //   await client.sleep(13500)
  it('test it', async () => {

    await client.get('http://localhost:4000/')
    await I.loginToSystem(userData)
    await I.chekThatUserLooggedInSystem(userData.username)
    await client.sleep(13500)

  })
})