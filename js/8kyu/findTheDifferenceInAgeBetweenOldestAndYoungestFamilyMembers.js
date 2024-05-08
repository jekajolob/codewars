// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

function differenceInAges(ages){
    let newAge = []
    let smallest = Math.min(...ages)
    let biggest = Math.max(...ages)
    newAge.push(smallest)
    newAge.push(biggest)
    let averadge = (biggest - smallest)
    newAge.push(averadge)
    return newAge
}

console.log(differenceInAges([82, 15, 6, 38, 35]))