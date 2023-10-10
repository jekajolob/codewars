// https://www.codewars.com/kata/5959ec605595565f5c00002b/train/javascript

function reverseBits(n) {
/*     let toBinary = 0
    let toBinaryReverse = ''
    toBinary = (n >>> 0).toString(2);

    for (i = toBinary.length - 1; i >= 0; i--) {
        toBinaryReverse += toBinary[i]

    }

    return parseInt( toBinaryReverse.split('').join(''), 2 ); */

    return parseInt(n.toString(2).split('').reverse().join(''), 2 )
     
}

console.log(reverseBits(417)) // 110100001