// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

function arrayMadness(a, b) {
    let sumOfSquares = a.reduce((sum, num) => sum + num ** 2, 0);
    let sumOfCubes = b.reduce((sum, num) => sum + num ** 3, 0);
    if(sumOfSquares > sumOfCubes){
        return true;
    }else{
        return false;
    }
  }

console.log(arrayMadness([4,5,6],[1,2,3]))
console.log(arrayMadness([4,5,6],[1,2,3]))