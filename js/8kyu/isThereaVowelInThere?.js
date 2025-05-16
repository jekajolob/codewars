// https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

function isVow(a) {
  let arr = []
  for (i = 0; i <= a.length - 1; i++) {
    if (a[i] == 97) {
      arr.push('a')
    }
    else if (a[i] == 101) {
      arr.push('e')
    }
    else if (a[i] == 105) {
      arr.push('i')
    }
    else if (a[i] == 111) {
      arr.push('o')
    }
    else if (a[i] == 117) {
      arr.push('u')
    } else {
      arr.push(a[i])
    }
  }
  return arr // your code here
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
)
