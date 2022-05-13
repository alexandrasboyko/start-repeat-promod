function aaa({index, action, ...rest}) {
  return rest
}


const sssss = {
  index: 2, action: function() {
    return 'privet'
  }
}
//'da': 'da', 'net': 'net'
const rest = aaa(sssss)
//console.log(rest)

function bbb() {
  if(Object.keys(rest).length) {
    console.log(true)
  }
  else(
    console.log(false)
  )
}
bbb()


