// https://www.codewars.com/kata/552e45cc30b0dbd01100001a/train/javascript

function zipvalidate(postcode) {
    if (postcode.length != 6 || postcode[0] == 0 || postcode[0] == 5 || postcode[0] == 7 || postcode[0] == 8 || postcode[0] == 9) {
        return false
    }
    
    for (let i = 0; i <= postcode.length - 1; i++) {
        if (postcode[i] == '1' 
        || postcode[i] == '2' 
        || postcode[i] == '3'
        || postcode[i] == '4'
        || postcode[i] == '5'
        || postcode[i] == '6'
        || postcode[i] == '7'
        || postcode[i] == '8'
        || postcode[i] == '9'
        || postcode[i] == '0' ) {
        
        }else{
            return false;
        }
    }
    return true;
}

console.log(zipvalidate( '198328' ))
console.log(zipvalidate( '12A483' ))
console.log(zipvalidate( '1@63' ))
console.log(zipvalidate( '598328' ))

// other solutions
function zipvalidate(postcode){
    return /^[12346]\d{5}$/.test(postcode)
  }//z.
