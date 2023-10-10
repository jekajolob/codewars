// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// return masked string
/* function maskify(cc) {
    let result = ''
    for(i = cc.length - 1; i > 0; i--){
      if(i < 4){
        result += cc[i]
      }else{
        result += '#'
      }
    }
    return result;
  }
  
  console.log(maskify('132123111345'))
 */


  function maskify(cc) {
    let result = ''
    if(cc.length <= 4){
        result = cc
    }
    if(cc.length > 4){
        for(i = cc.length - 1; i > 3; i--){
            result += '#'
    }
    result += cc.slice(-4)
  }
  return result;
}
  
  console.log(maskify('113122'))