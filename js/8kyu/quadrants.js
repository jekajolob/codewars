// https://www.codewars.com/kata/643af0fa9fa6c406b47c5399/train/javascript

function quadrant(x, y) {
    let axe = ''
      if(x > 0 && y > 0){
        axe = 1
      } 
      if(x < 0 && y < 0){
        axe = 3
      }
      if(x < 0 && y > 0){
        axe = 2
      }
      if(x > 0 && y < 0){
        axe = 4
      }
      return axe
    }

    console.log(quadrant(-10, 100))