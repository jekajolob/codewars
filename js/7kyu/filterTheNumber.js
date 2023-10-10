// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
function containsNumbers(str) {
    return /\d/.test(str);
  }

var filterString = function(value) {
    let original = '';
    for(i = 0; i <= value.length; i++){
      if(containsNumbers(value[i])){
        original += value[i]
      }
    }
    return Number(original)
  }

  console.log(filterString('a123a'))