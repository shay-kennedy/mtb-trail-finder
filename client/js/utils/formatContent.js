import Parser from 'html-react-parser'


const formatContent = (string) => {
  let s = string.replace(/\\\'s/g, "\'s")
  s = s.split('&lt;br /&gt;').join('')
  s = s.replace(/&lt;br&gt;&lt;br&gt;/g, '')
  s = Parser(s)
  if (Array.isArray(s)) {
    s = s.map(item => {
      if (typeof item === 'string') {
        return Parser(item)
      } else {
        return item
      }
    })
  }
  return s
}

export default formatContent
