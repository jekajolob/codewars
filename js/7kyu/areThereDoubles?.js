// https://www.codewars.com/kata/56a24b4d9f3671584d000039/train/javascript

function doubleCheck(str){
    str = str.toUpperCase()
    for(i = 0; i <= str.length - 1; i++){
      if(str[i] == str[i+1]){
        return true
      }
    }
  return false;
}

console.log(doubleCheck("abca")) // false
console.log(doubleCheck("aabc")) // true
console.log(doubleCheck("a 11 c d")) // true
console.log(doubleCheck("AabBcC")) // true
console.log(doubleCheck("a b  c")) // true 
console.log(doubleCheck("a b c d e f g h i h k")) // false


//other solutions

//1
//const doubleCheck = (str) => /(.)\1/i.test(str);

//2
/* function doubleCheck(str){
    return /(.)\1/i.test(str);
  } */