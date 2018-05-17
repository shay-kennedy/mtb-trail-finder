import Parser from 'html-react-parser'


export default function formatContent(string) {
  let s = string.replace(/\\\'s/g, "\'s")
  s = s.split('&lt;br /&gt;').join('')
  s = s.replace(/&lt;br&gt;&lt;br&gt;/g, '')
  return Parser(s)
}