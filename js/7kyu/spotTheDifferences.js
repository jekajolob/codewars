function spot(str1, str2) {
    let differences = [];
    let maxLength = Math.max(str1.length, str2.length);

    for (let i = 0; i < maxLength; i++) {
        if (str1[i] !== str2[i]) {
            //differences.push({ /* index: i, str1: str1[i] || '', str2: str2[i] || ''  */});
            differences.push(i)
        }
    }

    return differences;
}

// Example usage:
const str1 = "abcdefy";
const str2 = "Abcxefz";
console.log(spot(str1, str2));
// Output: [0, 3, 6]