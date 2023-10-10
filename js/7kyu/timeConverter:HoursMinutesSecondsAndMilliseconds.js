// https://www.codewars.com/kata/56b8b0ae1d36bb86b2000eaa/train/javascript
//Doesn't work


/* const convert = time => time.toJSON().replace(/.*T(.*)\.(.*)Z/, '$1,$2');

function convert(time) {
    const hh = String(time.getHours()).padStart(2, "0");
    const mm = String(time.getMinutes()).padStart(2, "0");
    const ss = String(time.getSeconds()).padStart(2, "0");
    const ms = String(time.getMilliseconds()).padStart(3, "0");
  
    return `${hh}:${mm}:${ss},${ms}`;
} */

const convert = time =>
  time.toISOString().slice(11,23).replace(`.`, `,`);

console.log(convert(9999, 9, 9, 9, 9, 9, 999))