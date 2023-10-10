//https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

function tripleTrouble(one, two, three){
    let result = '';
    for(let i = 0; i < one.length; i++){
        for(let j = 0; j < two.length; j++){
            for(let k = 0; k < three.length; k++){
                if(i == j && j == k){
                result += one[i] + two[j] + three[k];
                }
            }
        }
    }
    return result;
   }

   console.log(tripleTrouble('aaa', 'bbb', 'ccc'))