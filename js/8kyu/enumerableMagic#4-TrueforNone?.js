// https://www.codewars.com/kata/545993ee52756d98ca0010e1/train/javascript

function none(arr, fun){
    return !arr.some(fun);
  }

console.log(
  none([1, 2, 3, 4, 5], function (e) {
    return e > 5
  })
) //true
console.log(
  none([1, 2, 3, 4, 5], function (e) {
    return e > 4
  })
) //false

console.log(
    none([1, 2, 3, 4, 5], function (e) {
      return e > 1
    })
  ) //false

  console.log(
    none([1, 2, 3, 4, 5], function (e) {
      return e > 7
    })
  ) //true
