//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(x) {
    let palindrom = ''
    for(let i = x.length - 1; i >= 0; i--){
      palindrom += x[i];
    }

    return palindrom;
    if (x == palindrom){
      return true;
    }else{
      return false;
    }
  }
console.log(isPalindrome('aba'))
console.log(isPalindrome('hello'))
console.log(isPalindrome('abba'))

