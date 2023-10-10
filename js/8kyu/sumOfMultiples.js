//https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

function sumMul(n,m){

if (m <= n) return 'INVALID'

let x = 0
for(let i = n; i < m; i += n){
    x += i
}
return x
}

console.log(sumMul(2,9))