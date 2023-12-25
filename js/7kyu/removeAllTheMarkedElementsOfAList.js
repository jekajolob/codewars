// https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript

function removeArr(integer_list, values_list){
    //your code here
  const newArr=[];
      for(let i =0;i<integer_list.length;i++){
          let a =0;
        for(let j =0;j<values_list.length;j++){
          if(integer_list[i]==values_list[j]){
            a=1;
          }
          if(a===1){
              break;
          }
        }
        if(a===0){
          newArr.push(integer_list[i]);}
      }
      return newArr;
  }

let integer_list1 =  [1, 1, 2 ,3 ,1 ,2 ,3 ,4]
let values_list1 = [1, 3]

console.log(removeArr(integer_list1, values_list1))

//other solutions
/* Array.prototype.remove_ = function(integer_list, values_list){
	return integer_list.filter(function (element) {
  	return values_list.indexOf(element) === -1;
  });
} */