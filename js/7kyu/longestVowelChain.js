// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

  function solve2(s) {
    let cur = 0
    let max = 0
    for (let i = 0; i < s.length; ++i) {
      if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
        cur++
        if (cur > max) {
          max = cur
        }
      } else {
        cur = 0
      }
    }
    return max
  }


console.log(solve2("codewarriors"))  // 2


// other solutions

//1
//const solve = x =>  Math.max(...x.split(/[^aoeiu]/i).map(x => x.length))

//2
/* function solve(s) {
    let cur = 0
    let max = 0
    for (let i = 0; i < s.length; ++i) {
      if ("aeiou".includes(s[i])) {
        cur++
        if (cur > max) {
          max = cur
        }
      } else {
        cur = 0
      }
    }
    return max
  } */
