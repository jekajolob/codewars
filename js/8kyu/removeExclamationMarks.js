function removeExclamationMarks(s) {
  let arr = ''
  for (i = 0; i < s.length; i++) {
    if (s[i] != '!') {
      arr += s[i]
    }
  }
  return arr
}

console.log(removeExclamationMarks('Hello World!'))
