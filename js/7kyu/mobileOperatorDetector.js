

function detectOperator(a){
    var op="no info";
    let strNum = a.toString().slice(1, 4);
    if(strNum == "039"){
        op = 'Golden Telecom'
    }
    if(strNum == "050" || strNum == "095" || strNum == "099" || strNum == "066"){
        op = 'MTS'
    }
    if(strNum == "063" || strNum == "093"){
        op = 'Life:)'
    }
    if(strNum == "067" || strNum == "096" || strNum == "097" || strNum == "098"){
        op = 'Kyivstar'
    }
    if(strNum == "068"){
        op = 'Beeline'
    }
    return op
}

console.log(detectOperator(80931111))

