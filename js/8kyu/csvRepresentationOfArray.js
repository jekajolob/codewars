//https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript

function toCsvText(array) {
    return array.join("\n")
 }

 console.log (toCsvText([
    [ 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
   ] )) // '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');