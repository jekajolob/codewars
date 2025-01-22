// https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript
const arr = ['a', 'b', 'c', 'd', 'e'];
function first(arr, n = 1) {
    let result = []
    for(i = 0; i < n  && i < arr.length; i++){
      result.push(arr[i])
    }
    return result
  }

  console.log(first(arr, 2))
  console.log(first(arr, 1))
  console.log(first(arr, 4))
  console.log(first(arr, 5))


//Shorter solution
/* function first(arr, n = 1) {
    return arr.slice(0, n);
} */