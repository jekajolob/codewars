// https://www.codewars.com/kata/67757660c552a3a7ef9aaceb/train/javascript

function validateBase(num, base) {
    // Convert the number to a string to process each digit
    const numberStr = num.toString();
    
    // Define the valid digits for the given base
    const validDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, base);
    
    // Check if every digit in the number belongs to the valid digits
    return [...numberStr].every(digit => validDigits.includes(digit));
}