// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x){
    let total = 1
    for(i = 0; i < x.length; i++){
        total = total * x[i]
    }
    return total
}

console.log(grow([1, 2, 3, 4]))