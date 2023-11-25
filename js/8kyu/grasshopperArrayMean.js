//https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript

function findAverage(nums) {
    let sum = 0;
    for(i = 0; i < nums.length; i++){
      sum+= nums[i]
    }
    return sum/nums.length
  }

  console.log(findAverage([1, 3, 5, 7]))