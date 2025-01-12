// https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript

function cubeChecker(volume, side){
    if (volume > 0 && side > 0) {
    if (side ** 3 == volume){
        return true;
    }else{
        return false;
        }
    } else {
    return false;
    }
  };

  console.log(cubeChecker(5, 15)) //false
  console.log(cubeChecker(8, 2)) //true
