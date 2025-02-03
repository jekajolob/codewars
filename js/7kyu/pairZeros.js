// https://www.codewars.com/kata/54e2213f13d73eb9de0006d2/train/javascript

function pairZeros(arr) {
  let result = []
  let count = 0
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i])
    } else if (arr[i] == 0) {
      count++
      if (count !== 2) {
        result.push(arr[i])
      } else {
        count = 0
      }
    }
  }

  return result
}

console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0])) // [1,0,1,2,0,3,0]
