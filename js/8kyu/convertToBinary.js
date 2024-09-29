// https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript

function toBinary(n){
    let bin = ''
   
    do {
        if(n % 2 == 0){
            bin+=0
        }else{
            bin+=1
        }
        n = Math.floor(n / 2)
        
    } while (n != 0);
    return bin.split(' ').reverse().toString()
  }

  //console.log(toBinary(5))
  console.log(toBinary(11))
  console.log(toBinary(0o1))

