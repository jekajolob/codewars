// https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript

function  calculateAge(bornYear, currentYear) {  
    if(bornYear == currentYear){
      return "You were born this very year!"
  }if(bornYear < currentYear){
    if(currentYear - bornYear == 1){
      return "You are 1 year old."
  }else{
    return `You are ${currentYear - bornYear} years old.`
  }
}else{
    if(bornYear - currentYear == 1){
        return "You will be born in 1 year."
    }else{
        return `You will be born in ${bornYear - currentYear} years.`
    }
    }
}
  
  console.log(calculateAge(2000, 2090)) //You are 90 years old.