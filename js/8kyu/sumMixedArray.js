//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

function sumMix(x){
    let Sum = 0;
    for(i = 0; i <= x.length - 1; i++){
        Sum += Number(x[i])
    }
    return Sum

}

console.log(sumMix([9, 3, '7', '3']))

console.log(1+ Number('1'))