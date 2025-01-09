//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
    let arr = Array.from(String(n), Number);
    let stroke = 0;

        for (i = 0; i < arr.length; i++) {
            stroke += arr[i]
        }
        return stroke;
    }

console.log(digitalRoot(4569999999999))

//not finished
// Ho4u Maksa v zhopu!