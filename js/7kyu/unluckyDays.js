//https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript


const unluckyDays = year => {
    let unlucky = 0;
    for (x = 0; x < 12; x++) {
      unlucky += new Date(year, x, 13).getDay() === 5 ? 1 : 0;
    }
    return unlucky;
  }