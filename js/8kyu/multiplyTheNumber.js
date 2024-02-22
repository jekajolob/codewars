// https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript

function multiply(number) {
  let mult = 1
  for (i = 0; i < number.toString().length; i++) {
    if (number.toString()[i] == '-') {
    } else {
      mult *= 5
    }
  }
  return number * mult
}

console.log(multiply(10)) //250
console.log(multiply(-2)) //-10

// other solution
/* function multiply(number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
  } */