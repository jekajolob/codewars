// https://www.codewars.com/kata/58635f1b2489549be50003f1/train/javascript

function quadraticFormula(a, b, c) {
    let result = []

    result.push((-b - Math.sqrt(b*b - 4*a*c)) / (2*a))
    result.push((-b + Math.sqrt(b*b - 4*a*c)) / (2*a))
    
    return result;
  }


  //doTest(2, 16, 1, [-7.937003937005906, -0.06299606299409444]
    console.log(quadraticFormula(2, 16, 1))