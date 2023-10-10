// https://www.codewars.com/kata/56e9ac87c3e7d512bc001363/train/javascript

function asciiEncrypt(plaintext) {
    let shiftAdd = ''
    let cipherText = ''

    for( i = 0; i < plaintext.length; i++){
      shiftAdd = plaintext.charCodeAt(i)
      cipherText += String.fromCharCode(shiftAdd + i)


    }
      return cipherText;
  }
      
  function asciiDecrypt(ciphertext) {
    let shiftAdd = ''
    let cipherText = ''

    for( i = 0; i < ciphertext.length; i++){
      shiftAdd = ciphertext.charCodeAt(i)
      cipherText += String.fromCharCode(shiftAdd - i)


    }
      return cipherText;
  }


console.log(asciiEncrypt('password'))
console.log(asciiDecrypt('pbuv{txk'))