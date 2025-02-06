// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

function noBoringZeros(n) {
    if (n === 0) return 0; // Special case for zero

    let str = n.toString().split('');

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== '0') {
            return Number(str.slice(0, i + 1).join(''));
        }
    }

    return 0; // Fallback case, though logically unreachable
}

  console.log(noBoringZeros(1450)) // 145
