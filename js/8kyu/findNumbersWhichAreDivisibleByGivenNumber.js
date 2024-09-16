// https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

function divisibleBy(numbers, divisor){
    let arr = []

    for(i = 0; i <= numbers.length-1; i++){
        if(numbers[i]%divisor == 0){
            arr.push(numbers[i])
        }
    }
    return arr
}

console.log(divisibleBy([1,2,3,4,5,6], 2)) //2,4,6