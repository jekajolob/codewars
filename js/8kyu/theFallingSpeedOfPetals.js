// https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/train/javascript

function sakuraFall(v) {
    if (v <= 0){
        return 0
    }else{return 400/v;}    
}

console.log(sakuraFall(5)) // 80
console.log(sakuraFall(10)) // 40
console.log(sakuraFall(200)) // 40
console.log(sakuraFall(-1)) // 40

