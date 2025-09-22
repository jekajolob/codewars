// https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript

function nextId(ids) {
  const used = new Set(ids);
  let i = 0;
  while (used.has(i)) i++;
  return i;
}

function nextId2(ids) {
  const used = new Set(ids);
  return used;
}

console.log(nextId([0,1,2,3,5])) //4
console.log(nextId([7,8,0,1,2,5,5,6])) //3
console.log(nextId2([7,8,0,1,2,5,5,6]))