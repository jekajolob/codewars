// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 1
  let dogYears = 1
    if(humanYears == 1){
        catYears = 15
        dogYears = 15
    }
    if(humanYears == 2){
        catYears = 15 + 9
        dogYears = 15 + 9
    }
    if(humanYears > 2){
        catYears = 15 + 9 + ((humanYears - 2) * 4)
        dogYears = 15 + 9 + ((humanYears - 2) * 5)
    }
    
    return [humanYears, catYears, dogYears];
  }
  
  console.log(humanYearsCatYearsDogYears(1))
  console.log(humanYearsCatYearsDogYears(2))
  console.log(humanYearsCatYearsDogYears(10))


  //Other Solutions

  //1
//   const humanYearsCatYearsDogYears = humanYears => [
//     humanYears,
//     ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
//     ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
//   ];

  //2
//   var humanYearsCatYearsDogYears = function(y) {
//     if (y == 1) return [1, 15, 15]
//     if (y == 2) return [2, 24, 24]
//     return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
//   }