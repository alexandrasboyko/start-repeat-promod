// const {step} = require('./lib/reporter')
// function decorateBase1(classtoDecorate, methodName, messageFN) {
//   const methodDescr = Object.getOwnPropertyDescriptor(classtoDecorate, methodName)

//   const originalMethodImplementation = methodDescr.value

//   const decorated = async function(...args) {
//     const prettyName = messageFN(this.name)
//     const originalCallable = originalMethodImplementation.bind(this, ...args)
//     return step(prettyName, originalCallable, ...args)
//   }
//   Object.defineProperty(decorated, 'name', {value: methodName})
//   // decorated = {name: {value:getData, writeble:true,... }}
//   //const a = async function() {}; console.log(a.name)
//   // в самої анонімної функції тепер назва методу, тобто вона вже неанонімна і вона вже немає значення decorated в дискрипторі властивості decorated.name, в неї тепер інша назва

//   Object.defineProperty(classtoDecorate, methodName, decorated)

// }


// const a = {
//   a: 1,
//   2: 'litera'
// }
// console.log(a['a'])
// console.log(a[2])

function non(a, b) {
  console.log('non')
  return a + b
}

non.only = function(c, e) {
  console.log('non.only')
  return c - e
}

console.log(Object.getOwnPropertyDescriptors(non))
console.log(typeof (non))


class BaseClass {
  constructor(selector, elementName, elementRoot) {
    this.selector = selector;
    this.name = elementName;
    this.elementRoot = elementRoot // this.elementRoot = $(this.selector)
  }

}

class Input extends BaseClass {
  constructor(selector, elementName, elementRoot) {
    super(selector, elementName, elementRoot)
  }
}

const a = new Input('#id', 'id', $('id'))
