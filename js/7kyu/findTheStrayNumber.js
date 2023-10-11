// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

function stray(numbers) {

  for(i = 0; i < numbers.length; i++){
    if(numbers[i] != numbers[i+1] && numbers[i] != numbers[i+2]){
        return numbers[i]
    }
    if(numbers[i+1] != numbers[i] && numbers[i+1] != numbers[i+2]){
        return numbers[i+1]
    }
    if(numbers[i+2] != numbers[i] && numbers[i+2] != numbers[i+1]){
        return numbers[i+2]
  }

}
}

console.log(stray([1, 1, 2]))

// other solutions

//1
/* function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
  } */

//2
//  const stray = (numbers) => numbers.filter(el => numbers.indexOf(el) === numbers.lastIndexOf(el))[0]
