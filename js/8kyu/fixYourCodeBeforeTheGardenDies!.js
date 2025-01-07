// https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript

function rainAmount(mm){
    let difer = 0
    if (mm < 40) {
        difer = mm - 40
         return "You need to give your plant " + Math.abs(difer) + " mm of water"
    }
    else {
         return "Your plant has had more than enough water for today!"
    }
}


console.log(rainAmount(100))
console.log(rainAmount(39))