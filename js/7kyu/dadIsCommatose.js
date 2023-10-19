// https://www.codewars.com/kata/56a24b309f3671608b00003a/train/javascript

function dadFilter(str) {
    let comma = 0
    let newStr = ''
    for (i = 0; i <= str.length - 1; i++) {
        if (str[i] == ',') {
            comma++
            if (comma == 1) {
                newStr += ','
            }
        } else {
            comma = 0
            newStr += str[i]
        }

    }
    if (newStr[newStr.length - 1] == ' ') {
        newStr = newStr.slice(0, -1)
    }
    if (newStr[newStr.length - 1] == ',') {
        return newStr.slice(0, -1)
    }
     else {
        return newStr
    }
}

console.log(dadFilter("all this,,,, used to be trees,,,,,,")) // "all this, used to be trees"
console.log(dadFilter("all this,,,, used to be trees")) // "all this, used to be trees"

// other solutions

// 1
//const dadFilter = str => str.replace(/,(?=,)|,\s*$/g,'')

//2
/* function dadFilter(str){
    str = str.replace(/,+/g, ",")
                     .trim()
                   .replace(/,$/, "");
    
    return str;
  } */