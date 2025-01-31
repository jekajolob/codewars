// https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010/train/javascript

function lostSheep(friday,saturday,total){
    let sumFriday = friday.reduce((sum, num) => sum + num, 0)
    let sumSatturday = saturday.reduce((sum, num) => sum + num, 0)

    return total - (sumFriday + sumSatturday)
  }

  console.log(lostSheep([4, 8, 10], [], 50))