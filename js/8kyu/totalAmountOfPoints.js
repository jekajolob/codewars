// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
    let result = 0
    for(i = 0; i < games.length; i++){
    for(j = 0; j < games[i].length; j++){
        //return games[i][j + 2]


        if(games[i][j] > games[i][j + 2]){
            result += 3
        }
        if(games[i][j] == games[i][j + 2]){
            result += 1
        }

    }
    }
    return result
  }

  console.log(points(["5:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))