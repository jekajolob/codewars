//https://www.codewars.com/kata/524f5125ad9c12894e00003f/javascript

function remainder(n, m){
    let result = 0;
    if(n == 0 || m == 0){
      result = 'division by zero'
    }
    if(n > m){
      result = n%m 
    }else{
      result = m%n
    }
    
    return result;
  }