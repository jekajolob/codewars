// https://www.codewars.com/kata/65126d52a5de2b11c94096d2

function sumNoDuplicates(numList) {
    let sum = 0
    for ( i = 0; i < numList.length; i++) {
        for ( j = 0; j < numList.length; j++) {
            if (i == j) {
                continue
            }
            if (numList[i] == numList[j]) {
                break
            }
            

        }
        if (j == numList.length) {
            sum += numList[i]
        }
    }
        return sum
    }

    console.log(sumNoDuplicates([1, 1, 2, 3])) // 5