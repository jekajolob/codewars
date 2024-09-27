// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){

    let newName = name.toUpperCase().split(' ')
    return newName[0][0] + "." + newName[1][0]

}

console.log(abbrevName("David Mendieta")) // "D.M"