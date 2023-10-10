// https://www.codewars.com/kata/55d6a0e4ededb894be000005/train/javascript

function encode(str) {

     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
     let strLower = str.toLowerCase()
     let newStr = ''

     for(i = 0; i < strLower.length; i++){
       for(j = 0; j <= alphabet.length; j++){
        if(strLower[i] == alphabet[j]){
            newStr += j + 1
        }
       }
       newStr += strLower[i]
     }
     return newStr.replace( /[a-z]/g, '' )
   }

   console.log(encode('abc'))
   console.log(encode('abC-#@5'))

   console.log(2 ** 6)

   function func1(){
    setTimeout(()=>{
      console.log(x);
      console.log(y);
    },3000);
  
    var x = 2;
    let y = 12;
  }
  func1();


   /* let str = 'abC-#@5';
   console.log(str.toLowerCase()) */