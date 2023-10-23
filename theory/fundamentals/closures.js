// Counter. Вызывается функция(счетчик) внутри функцииб потом функция присваивается к переменной
// и вызывается счетчик с помощью переменной

function counter(){
    let count = 0;

    return function createCount(){
        count++
        console.log(count);
    }
}

let counter_1 = counter();
let counter_2 = counter();

counter_1() // 1
counter_1() // 2
counter_1() // 3
counter_2() // 1
counter_2() // 2
counter_2() // 3


// Задача на замыкание. Дана функция, нужно определить какай будет сумма елементов

function generated(seed){
    var private = seed;
    return function(param){
        private += seed;
        return private + param;
    }
}

var a = generated(1);
var b = generated(2);

console.log(a(1) + a(2) + b(3) + b(4))  // 25

/* console.log(a(1))
console.log(a(2))
console.log(b(3))
console.log(b(4)) */