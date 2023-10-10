// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

function twoSort(s) {
    let result = '';
    let arr = s.sort();
    let string = arr[0].split(' ').toString()
    for(i = 0; i < string.length; i++){
        result += string[i] + '***'
    }
    return result.slice(0, -3);
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));