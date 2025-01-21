// https://www.codewars.com/kata/545af3d185166a3dec001190/train/javascript


function eachCons(list, n) {
    const result = []; // Initialize an empty array to store the cascading subsets.
    
    // Loop from index 0 to the point where taking `n` elements won't exceed the array length.
    for (let i = 0; i <= list.length - n; i++) {
      // Use slice to take a subset of the array of size `n` starting from index `i`.
      result.push(list.slice(i, i + n));
    }
    
    return result; // Return the final array of cascading subsets.
  }
  