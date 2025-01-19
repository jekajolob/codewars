// https://www.codewars.com/kata/59126992f9f87fd31600009b/train/javascript



function whoseMove(lastPlayer, win) {
    if(win == true){
        return lastPlayer
    }else if(lastPlayer == 'black'){
        return 'white'
    }else{
        return 'black'
    }
  }

  console.log(whoseMove("black",false)) //white