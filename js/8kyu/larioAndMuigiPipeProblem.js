function pipeFix(numbers){
    let list = [];
    for(let i = numbers[0]; i <= numbers[numbers.length-1]; i++){

        list.push(i);
    }
    return list;
}

console.log(pipeFix([1,2,3,12]))