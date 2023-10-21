// Example 1: Factorial
// 1! = 1
// 2! = 1*2
// 3! = 1*2*3 // multiply all previous numbers


// 1
function factorial_1(n){
    let p = 1;
    for (let i = 1; i <= n; i++){
        p *= i;
    }
    console.log(p);
}

factorial_1(5) // 120

// 2 recursion
let result = 1;
function factorial_2(n){
    if (n == 0) return;
    result *= n;
    factorial_2(n-1);
}

factorial_2(5)
console.log(result); // 120

// 3 recursion
function factorial_3(n) {
    return n == 1 ? 1 : n * factorial_3(n - 1);
}

console.log(factorial_3(5)) // 120


// Example 2: Fibonacci

// 1, 1, 2, 3, 5, 8, 13, 21 ...  // result for step 6 will be 5 + 8 = 13
// 1, 2, 3, 4, 5, 6,  7,  8 ...  // steps

function fib(n){
    if (n == 1) return 1;
    if (n == 2) return 1;
    return fib(n - 1) + fib(n - 2); 
}

console.log(fib(8));

