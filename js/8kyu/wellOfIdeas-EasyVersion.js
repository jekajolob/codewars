function well(x) {
  let count = 0
  for (i = 0; i < x.length; i++) {
    if (x[i] == 'good') count += 1
  }
  if (count == 1 || count == 2) {
    return 'Publish!'
  }
  if (count > 2) {
    return 'I smell a series!'
  } else {
    return 'Fail!'
  }
}



console.log(well(['bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))

//other solution
/* const  well = x => {
    let count = x.filter(el => el == 'good').length
    return  count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!'; 
  } */