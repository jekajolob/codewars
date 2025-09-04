// https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript

function ensureQuestion(value){
    let qSign = ""
    for(i = 0; i <= value.length - 1; i++)
        qSign = value[i]
    if(qSign == '?'){
        return value
    }else{
       return value + "?" 
    }
}

console.log(ensureQuestion("Hello"))