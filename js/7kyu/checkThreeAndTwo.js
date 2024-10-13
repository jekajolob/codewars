// https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript

function checkThreeAndTwo(array) {
    let countA = 0
    let countB = 0
    let countC = 0
  for(i = 0; i <= array.length; i++){
    if(array[i] == 'a'){
        countA+=1
    }
  }
  for(i = 0; i <= array.length; i++){
    if(array[i] == 'b'){
        countB+=1
    }
  }
  for(i = 0; i <= array.length; i++){
    if(array[i] == 'c'){
        countC+=1
    }
  }
  if((countA == 3 && countB == 2) ||
  (countA == 2 && countB == 3) ||
  (countA == 3 && countC == 2) ||
  (countA == 2 && countC == 3) ||
  (countB == 3 && countC == 2) ||
  (countB == 2 && countC == 3)){
    return true
  }else{
    return false
  }
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]))
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"]))