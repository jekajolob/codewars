// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
  let result = 0
  if (!Array.isArray(array) || array.length <= 1) {
    return 0
  } else {
    for (i = 0; i <= array.length - 1; i++) {
      result += array[i]
    }
    result = result - Math.min(...array) - Math.max(...array)
  }
  return result
}

console.log(sumArray(null))
console.log(sumArray([3, 5]))
console.log(sumArray([6, 2, 1, 8, 10]))
