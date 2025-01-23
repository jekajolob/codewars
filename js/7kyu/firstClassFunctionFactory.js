//https://www.codewars.com/kata/563f879ecbb8fcab31000041/train/javascript

function factory(x) {
    return function(myArray) {
      let result = [];
      for (let i = 0; i < myArray.length; i++) {
        result.push(myArray[i] * x);
      }
      return result;
    };
  }
