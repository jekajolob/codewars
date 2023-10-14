// https://www.codewars.com/kata/574e4175ff5b0a554a00000b/train/javascript

function convertToMixedNumeral(parm){
    const [topStr, bottomStr] = parm.split('/');
    const top = parseInt(topStr, 10);
    const bottom = parseInt(bottomStr, 10);
    const integer = top > 0 ? Math.floor(top/bottom) : Math.ceil(top/bottom);
    const fraction = integer === 0 ? top % bottom : Math.abs(top % bottom);
    return `${integer ? '' + integer : ''} ${fraction ? '' + fraction + '/' + bottom: ''}`.trim();
  }


console.log(convertToMixedNumeral('6/2')) // 3
console.log(convertToMixedNumeral('9/18')) // 9/18
console.log(convertToMixedNumeral('74/3')) // 24 2/3
console.log(convertToMixedNumeral('-504/26'))

