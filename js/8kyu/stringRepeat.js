// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr (n, s) {
    let result = ''
    for(i = 0; i < n; i++){
        result += s
    }
    return result;
  }

  console.log(repeatStr(3, "*"))