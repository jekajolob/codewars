// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
    let total = 0
    if (bonus){
        total = salary * 10
    }else{
        total = salary
    }
    return "£"+total
}

console.log(bonusTime(10000, false))

