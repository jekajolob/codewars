// https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/train/javascript

function xor(a, b) {
    let xor1 = '' 

    if (a == false && b == false){
        xor1 = false
    }
    if (a == true && b == false){
        xor1 = true
    }
    if (a == false && b == true){
        xor1 = true
    }
    if (a == true && b == true){
        xor1 = false
    }
    return xor1
  }

  console.log(xor(false, false))
  console.log(xor(true, false))