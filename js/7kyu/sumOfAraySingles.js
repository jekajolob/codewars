// https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

function repeats(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false; // Flag to track duplicates

        // Check if the current number has a duplicate
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                isDuplicate = true;
                break; // No need to check further if a duplicate is found
            }
        }

        // If no duplicate is found, add to the result
        if (!isDuplicate) {
            result += arr[i];
        }
    }

    return result;
}

    console.log(repeats([4,5,7,5,4,8]))