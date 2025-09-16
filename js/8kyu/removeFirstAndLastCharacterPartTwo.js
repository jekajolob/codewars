// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

function array(string) {
    let arr = []
    string = string.split(",")
  for(i = 0; i <= string.length - 1; i++){
    if(string.length <= 2) {
        return null
    }if( i == 0 || i == string.length - 1){}
        else{arr.push(string[i])}    
  }
  let finalString = arr.toString()
  return finalString.replaceAll(",", " ");
}

console.log(array('1,2'))
console.log(array('1,2,3,4'))
console.log(array('A1,B2,C3,D4,E5'))

