// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

function multiTable(number) {
    let sum = ''
    for(i = 1; i <=10; i++){
        sum += `${i} * ${number} = ${i * number}`;
        if (i !== 10) sum += '\n'; // Prevents trailing newline
    }
    return sum
  }

  console.log(multiTable(5))