// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

function compareNumbers(a, b) {
    return a - b;
  }

function sumOfDifferences(arr) {

    let firstVar = 0
    let newArr = []
    arr.sort(compareNumbers).reverse()

    for (i = 0; i < arr.length -1; i++){
        firstVar = arr[i] - arr[i+1]
        newArr.push(firstVar)
    }
    return newArr.reduce((partialSum, a) => partialSum + a, 0)

  
}

console.log(sumOfDifferences([1, 2, 10]))