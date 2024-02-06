//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
    let arr1 = []
    for(i = 0; i < array.length; i++){
      arr1.push(-array[i])
    }
     return arr1;
  }