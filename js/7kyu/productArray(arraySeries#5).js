// https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript

function productArray(numbers){
    let newArray = []
    let temp = 1
    for(i = 0; i <= numbers.length -1; i++){
        temp = 1
        for(j = 0; j <= numbers.length -1; j++)
        if(numbers[i] != numbers[j]){
            temp *= numbers[j];            
        }
        newArray.push(temp)
        

    }
    return newArray
  }

  console.log(productArray([12,20])) // [20,12]
  console.log(productArray([3,27,4,2])) // [216,24,162,324]
  console.log(productArray([14, 92, 5, 48, 68, 6, 5])) // 
  //[45043200, 6854400, 126120960, 13137600, 9273600, 105100800, 126120960]