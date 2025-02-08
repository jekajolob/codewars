// https://www.codewars.com/kata/5890579a34a7d44f3b00009e/train/javascript

function manipulate(num) { 
    let newArr = []
    num = num.toString().split('').map(Number);
    let half = num.length/2
    for(i = 0; i < num.length; i++){
        if(half-1 >= i){
            newArr.push(num[i])
        }else{
            newArr.push(0) 
        }
    }
    
    return Number((newArr.join('')))
  } 

  console.log(manipulate(838473))
  console.log(manipulate(8384731))

