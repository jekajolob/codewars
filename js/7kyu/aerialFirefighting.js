// https://www.codewars.com/kata/5d10d53a4b67bb00211ca8af/train/javascript

function waterbombs(fire, w) { 
    return fire.split('Y').reduce((acc, item) => acc + Math.ceil(item.length / w), 0)
  }

  console.log(waterbombs("xxxxYxYx", 4))

/* function waterbombs(fire, w) {
  let waterBombs = 0;
  let currentSection = 0;

  for (let i = 0; i < fire.length; i++) {
    if (fire[i] === 'x') {
      currentSection++;
      if (currentSection === w) {
        waterBombs++;
        currentSection = 0;
      }
    } else {
      if (currentSection > 0 && currentSection <= w) {
        waterBombs++;
        currentSection = 0;
      }
    }
  }

  if (currentSection > 0 && currentSection <= w) {
    waterBombs++;
  }

  return waterBombs;

 } */