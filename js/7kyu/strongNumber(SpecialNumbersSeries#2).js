//https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript



function strong(n) {
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    let result = 0
    n = n.toString()
    for(let i = 0; i < n.length; i++){
        result+=factorial(n[i])
    }if(result == n){
    return "STRONG!!!!";
    }else{
        return "Not Strong !!"
    }
  }



console.log(strong(145)); // Output: Strong
console.log(strong(123)); // Output: Strong
