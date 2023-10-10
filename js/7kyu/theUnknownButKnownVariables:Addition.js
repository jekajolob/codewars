// https://www.codewars.com/kata/5716955a794d3013d00013f9/train/javascript

function theVar(theVariables) {
    let first = 0
    let second = 0
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(i =0; i < theVariables.length; i++){
        for(j = 0; j < alphabet.length; j++)
        if(theVariables[i] == alphabet[j]){
            first += Object.keys(alphabet)[j];
            break;
        }
        break;

    }

    for(i =2; i < theVariables.length; i++){
        for(j = 0; j < alphabet.length; j++)
        if(theVariables[i] == alphabet[j]){
            second += Object.keys(alphabet)[j];
            break;
        }
        break;

    }

    return (Number(first) + 1) + (Number(second) + 1);
  }

  /*function theVar(theVariables) {
  let alphabet = ' abcdefghijklmnopqrstuvwxyz',
      result = 0
  for (let i = 0; i < alphabet.length; i++) {
    if (theVariables[0] == alphabet[i]) {
      result += i
    }
    if (theVariables[2] == alphabet[i]) {
      result += i
    }
  }
  return result
}
*/



/* const theVar = v => v.charCodeAt(0) + v.charCodeAt(2) - 96 * 2*/


  console.log(theVar('D+A'))

