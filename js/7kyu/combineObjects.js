// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript

function combine(...objs) {
    return objs.reduce((a, b) => {
        for (let k in b) {
          if (b.hasOwnProperty(k))
            a[k] = (a[k] || 0) + b[k];
        }
        return a;
      }, {});
  }


const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
console.log(combine(objA, objB)) //{ a: 13, b: 20, c: 36, d: 3 }


// other solution
/* function combine() {
    var obj = {}
  
    for (var i = 0; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
          }
    }
  
    return obj;
  } */