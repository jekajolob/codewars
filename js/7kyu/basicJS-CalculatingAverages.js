// https://www.codewars.com/kata/529f32794a6db5d32a00071f/train/javascript

var Calculator = {
    average: function(...numbers) {
      let sum = 0;
      let averadge = 0
     if (numbers == 0) return 0;
      for(i = 0; i < numbers.length; i++){
        sum+=numbers[i]
      }
      return averadge = sum/numbers.length
    }
   };

   console.log(Calculator.average(3,4,5)) // 4
   console.log(Calculator.average(0)) 