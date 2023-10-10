//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s){
    let middle = 0;
  if(s.length % 2 != 0){
    middle = Math.floor(s.length / 2)
    return s[middle]
  }
  
  if(s.length % 2 == 0){
    middle = s.length / 2
    return s[middle-1] + s[middle]
  }


  /* for(i =0; i < s.length; i++){
  return s[i];
  } */
}



//console.log(getMiddle("testing"))
console.log(getMiddle("test"))