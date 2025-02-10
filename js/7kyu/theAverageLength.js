// https://www.codewars.com/kata/5a430359e1ce0e35540000b1/train/javascript

function averageLength(array) {
    // Calculate the total length of all strings
    const totalLength = array.reduce((sum, str) => sum + str.length, 0);
  
    // Compute the average length and round to the nearest integer
    const avgLength = Math.round(totalLength / array.length);
  
    // Map each string to its new form with the average length
    return array.map(str => {
      const firstChar = str[0];
      if (str.length < avgLength) {
        // If the string is shorter, pad it with its first character
        return str + firstChar.repeat(avgLength - str.length);
      } else {
        // If the string is longer or equal, truncate it
        return str.slice(0, avgLength);
      }
    });
  }

  console.log(averageLength(['aa', 'bbb', 'cccc']))