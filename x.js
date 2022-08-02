const username = ''

const data = {action: {username: null}, username: {_element: username}}

async function click({index, action, ...rest} = {}) {
  // const rest = {username: {_element: username}}
  // {action: {username: null}, username: {username:'jkgkjgkj'} }
  console.log('index==>', index, 'action==>', action)
  // if(isNumber(index)) {
  //   return new this.childItem(this.rootEls.get(index), `${this.name} ${index}`).click(action)
  // }
  // else if(Object.keys(rest).length) {
  //   console.log('rest==>', rest)
  //   return (await this.findChild(rest)).click(action)
  // }
}