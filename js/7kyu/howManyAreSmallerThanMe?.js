//https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript

function smaller(nums) {
    let arr = [];
     for(let i = 0; i < nums.length; i++){
        let count = 0;
       for(let j = i+1; j < nums.length; j++){
         if(nums[i] > nums[j]){
           count += 1
         }
       }
       arr.push(count)
     }
     return arr
     
   }

   console.log(smaller([5, 4, 3, 2, 1]))
   console.log(smaller([1, 2, 3]))
   console.log(smaller([1, 1, -1, 0, 0]))

