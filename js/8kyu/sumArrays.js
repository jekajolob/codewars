// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

function sum (numbers) {
    let sum1 = 0
    for(i = 0; i < numbers.length; i++){
        sum1+=numbers[i]
    }
    return sum1
  }

  console.log(sum([1, 5.2, 4, 0, -1]))