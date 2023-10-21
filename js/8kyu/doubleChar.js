// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

function doubleChar(str) {
    let newChar = ''
    for(i = 0; i <= str.length -1; i++){
      newChar += str[i] + str[i]
    }
    return newChar
  }

  console.log(doubleChar("abcd")) // aabbccdd