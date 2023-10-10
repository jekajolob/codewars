function fakeBin(x){
    let sum = '';
    for(i = 0; i < x.length; i++){
      if(x[i] < 5){
        sum += '0';
      }else{
        sum += '1';
      }
    }
    return sum;
  }

  console.log(fakeBin('45385593107843568'))