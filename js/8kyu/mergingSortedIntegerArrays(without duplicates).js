// https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript

function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    let uniqueArr = [...new Set(newArr)];
    return uniqueArr.sort((a, b) => a - b);
}

console.log(mergeArrays([2, 4, 8], [2, 4, 6])); // [2, 4, 6, 8]

// Other solutions

// function mergeArrays(arr1, arr2) {
//     return Array.from(new Set(arr1.concat(arr2))).sort((a, b) => a - b);
//   }

// function mergeArrays(arr1, arr2) {
//     return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
//   }

// function mergeArrays(arr1, arr2) {
//     return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
//   }

// function mergeArrays(arr1, arr2) {
//     return Array.from(new Set([...arr1, ...arr2])).sort((a, b) => a - b);
//   }

// function mergeArrays(arr1, arr2) {
//     return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
//   }

// function mergeArrays(arr1, arr2) {
//     return Array.from(new Set(arr1.concat(arr2))).sort((a, b) => a - b);
//   }