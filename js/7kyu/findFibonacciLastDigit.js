// https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e

function getLastDigit(n) {
    let [a, b] = [0, 1];
    for (let i = 0; i < n; ++i) {
      [a, b] = [b, (a+b) % 10];
    }
    return a;
  }

console.log(getLastDigit(193150)) //5