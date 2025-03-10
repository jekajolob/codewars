// https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript

function evenLast(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 2) {
      sum += numbers[i];
    }
    
    return sum * numbers[numbers.length - 1];
  }