// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript

function drawStairs(n) {
    let space = ' '
    let stairs = ''
    if (n == 1){
      return 'I';
    }else{
    for (let i = 1; i <= n; i++) {
        stairs += space.repeat(i - 1)
        for (let j = 1; j <= i; j++) {
            
        }
        stairs += 'I'
        stairs += '\n'
        
  }
  return (stairs.trim());
}
}

  //console.log(drawStairs(1))
  console.log(drawStairs(5))


  //from codewars
/*   function drawStairs(n) {
    let result = [];
    
    for (let i = 0; i < n; i++) {
      result[i] = `${' '.repeat(i)}I`;
    }
    
    return result.join('\n');
  } */