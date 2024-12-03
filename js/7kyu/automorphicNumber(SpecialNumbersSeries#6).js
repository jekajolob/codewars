// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

function automorphic(n) {
    // Calculate the square of the number
    const square = n * n;

    // Convert both the number and its square to strings
    const numStr = n.toString();
    const squareStr = square.toString();

    // Check if the square ends with the number
    if (squareStr.endsWith(numStr)) {
        return "Automorphic";
    } else {
        return "Not!!";
    }
}