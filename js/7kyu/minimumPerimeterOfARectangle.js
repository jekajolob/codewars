// https://www.codewars.com/kata/5826f54cc60c7e5266000baf/train/javascript

function minimumPerimeter(area) {
    for(let i = Math.sqrt(area) | 0; i> 0; i--) {
      if (area % i == 0) {
        return 2 * (i + area / i)
      }
    }
  }

  console.log(minimumPerimeter(45))