//https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

function noBoringZeros(n) {

    let num = 0;

    for (let i = n.length - 1; i >= 0; i--){

        num = num + 1
    }

    return num

  
}

console.log(noBoringZeros('12300'))

//not finished