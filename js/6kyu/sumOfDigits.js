//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
    let stroke = '';

        for (i = 0; i < n.length; i++) {
            stroke += n[i]
        }
        return stroke;
    }

console.log(digitalRoot(16))

//not finished