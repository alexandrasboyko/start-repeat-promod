const obj = {
  met: function loginToSys() {
    console.log('Login')
  },
  r: 1213,
  p: 'fklmgvkld'
}

const objMetDescriptor = Object.getOwnPropertyDescriptor(obj, 'met')
const modifiedMet = () => {
  console.log('aaaaa')
  return objMetDescriptor.value()
}

Object.defineProperty(obj, 'met', {value: modifiedMet})

obj.met()

const a = async function() {

}

console.log(a.name)