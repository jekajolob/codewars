// https://www.codewars.com/kata/593b1909e68ff627c9000186/train/javascript

function nicknameGenerator(name){
    if(name.length < 4){
        return "Error: Name too short"
    }
    if(!/[aeiou]/.test(name[2])){
        return name.slice(0, 3)
    }else{
        return name.slice(0, 4)
    }
    
  }

  console.log(nicknameGenerator('Qwert'))

