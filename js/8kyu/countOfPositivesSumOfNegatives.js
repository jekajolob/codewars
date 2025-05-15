// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
    let positivesSumCount = 0;
    let negativeSum = 0;
    let arr = []

    if(!arr){
        return 0
    }

    for(i = 0; i <= input.length - 1; i++){
        if(input[i] > 0){
            positivesSumCount++
        }else{
            negativeSum+=input[i]
        }
    }
    arr.push(positivesSumCount, negativeSum)
    return arr
  }

  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[10, -65]
  console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) //[8, -50]
