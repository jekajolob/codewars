// https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript

//My solution
/* function productArray(numbers){
  const multiplyArray = [];

  for (let i = 0; i < numbers.length; i++) {
    let multiply = 1;

    for (let j = 0; j < numbers.length; j++) {
      if (i === j) {
        continue;
      }
      multiply *= numbers[j];
    }

    multiplyArray.push(multiply);
  }

  return multiplyArray;
}

  console.log(productArray([4,4])) // [4,4]
  console.log(productArray([12,20])) // [20,12]
  console.log(productArray([3,27,4,2])) // [216,24,162,324]
  console.log(productArray([7, 58, 4, 56, 4, 29, 8, 9])) // 
  //[108509184, 13095936, 189891072, 13563648, 189891072, 26191872, 94945536, 84396032] */


  //Other solution
  const productArray = numbers =>
  numbers.map(element => numbers.reduce((prev, curr) => prev * curr) / element)

  console.log(productArray([4,4])) // [4,4]
  console.log(productArray([12,20])) // [20,12]
  console.log(productArray([3,27,4,2])) // [216,24,162,324]
  console.log(productArray([7, 58, 4, 56, 4, 29, 8, 9])) // 
  //[108509184, 13095936, 189891072, 13563648, 189891072, 26191872, 94945536, 84396032]