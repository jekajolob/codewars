// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

function addLength(str) {
    let arr = [];
    let temp = ''
  for (i = 0; i < str.length; i++){
    if(str[i] != ' '){
      temp += str[i]
    }else{
      arr.push(temp + ' ' + temp.length) 
      temp = ''
    }
  }
  arr.push(temp + ' ' + temp.length)
  return arr
}

console.log(addLength('test test1 test2 123'))

/* function addLength(str) {
    let arr = [];
    let temp = ''
  for (i = 0; i < str.length; i++){
    temp += str[i]
    if(str[i] == ' '){
        arr.push(temp) 
        temp = ''
    }
  }
  arr.push(temp)
  return (arr)
}

console.log(addLength('test test1 test2 123')) */