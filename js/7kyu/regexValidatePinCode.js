//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

//1
function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}


//2
function validatePIN (pin) {
    //return true or false
      var n = pin.length;
    if( n != 4 && n != 6)
            return false;
    for (var i in pin)
            if (pin[i] > '9' || pin[i] < '0')
                return false;
    return true;
  }