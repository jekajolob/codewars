// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/javascript

function whatday(num) {
    let arr = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
   if(num > 0 && num <8){
    return arr[num - 1]
     }
    else{
      return 'Wrong, please enter a number between 1 and 7'
    }
  }

console.log(whatday(1))