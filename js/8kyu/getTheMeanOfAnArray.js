// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
    let result = 0
    for(i = 0; i <= marks.length - 1; i++){
        result+=marks[i]
    }
    result = Math.floor(result/i)
    return result
}

console.log(getAverage([2,2,2,2]))//4
console.log(getAverage([1,1,1,1,1,1,1,2])) //1
