//https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript

function reverseList(list) {
    let reverse = []
    for(let i = list.length - 1; i >= 0; i--){
      reverse.push(list[i]);
    }
    return reverse
  }

  console.log(reverseList([3,1,5,4]))