//https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4/train/javascript

function solve(b, a) {
  let arr = []

  for (i = 0; i < a.length; i++) {
    let count = 0
    for (j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        count++
      }
    }
    arr.push(count)
  }
  return arr
}

console.log(solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap'])) //[2, 1, 0]
