// https://www.codewars.com/kata/628e3ee2e1daf90030239e8a/train/javascript

function interlockable(a, b) {
    aBinary = a.toString(2)
    bBinary = b.toString(2)

    return `${aBinary}\n` + bBinary
  
}

console.log(interlockable(0,8))
