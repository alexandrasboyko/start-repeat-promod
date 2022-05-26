const {step} = require('./lib/reporter')
function decorateBase1(classtoDecorate, methodName, messageFN) {
  const methodDescr = Object.getOwnPropertyDescriptor(classtoDecorate, methodName)

  const originalMethodImplementation = methodDescr.value

  const decorated = async function(...args) {
    const prettyName = messageFN(this.name)
    const originalCallable = originalMethodImplementation.bind(this, ...args)
    return step(prettyName, originalCallable, ...args)
  }
  Object.defineProperty(decorated, 'name', {value: methodName})
  // decorated = {name: {value:getData, writeble:true,... }}
  //const a = async function() {}; console.log(a.name)
  // в самої анонімної функції тепер назва методу, тобто вона вже неанонімна і вона вже немає значення decorated в дискрипторі властивості decorated.name, в неї тепер інша назва

  Object.defineProperty(classtoDecorate, methodName, decorated)

}