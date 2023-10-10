//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
    let sum = 0;

    if (array == '') {
        return 0
    } else {
        for (i = 0; i < array.length; i++) {
            sum += array[i]
        }
        return sum / array.length
    }
}

console.log(findAverage([1, 2, 3]))