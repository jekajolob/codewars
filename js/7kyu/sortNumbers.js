//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
//https://mathhelpplanet.com/static.php?p=javascript-algoritmy-sortirovki

//Пузырьковая сортировка на JavaScript

function solution(A)       // A - массив, который нужно
{                            // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            if (A[j + 1] < A[j]) {
                var t = A[j + 1]; A[j + 1] = A[j]; A[j] = t;
            }
        }
    }
    return A;    // На выходе сортированный по возрастанию массив A.
}

/* function solution(nums){
    return (nums || []).sort(function(a, b){
      return a - b
    });
  } */

console.log(solution([1, 2, 3, 10, 5]))