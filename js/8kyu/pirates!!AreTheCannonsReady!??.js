// https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript

/* const cannonsReady = (gunners) => {
  for (const key in gunners) {
    if (gunners[key] !== 'aye') {
      return 'Shiver me timbers!'
    }
  }
  return 'Fire!'
} */

const cannonsReady = (gunners) => {
  const keys = Object.keys(gunners);
  for (let i = 0; i < keys.length; i++) {
    if (gunners[keys[i]] !== 'aye') {
      return 'Shiver me timbers!';
    }
  }
  return 'Fire!';
};

console.log(
  cannonsReady({ Mike: 'aye', Joe: 'aye', Johnson: 'aye', Peter: 'aye' })
)
console.log(
  cannonsReady({ Mike: 'aye', Joe: 'nay', Johnson: 'aye', Peter: 'aye' })
)

