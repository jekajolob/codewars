// https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript

function removeRotten(bagOfFruits){

    let newArray = []
    if(bagOfFruits == null || bagOfFruits == []){
      return [];
    }else{
    for(i = 0; i < bagOfFruits.length; i++){
            newArray.push(bagOfFruits[i].replace('rotten', '').toLowerCase())
    }
      }
    return newArray;
  }

  console.log(removeRotten([ 'rottenApple', 'rottenBanana', 'rottenApple', 'rottenPineapple', 'rottenKiwi' ]))
  