//https://www.codewars.com/kata/55902c5eaa8069a5b4000083/train/javascript

function formatMoney(amount) {
  amount = '' + amount
  let lastDigits = ''
  let result = ''
  for (i = amount.length - 1; i >= amount.length - 3; i--) {
    lastDigits += amount[i]
  }
  if (lastDigits[2] == '.') {
    result = '$' + amount
  } else if (lastDigits[1] == '.') {
    result = '$' + amount + '0'
  } else if (lastDigits[0] == '.') {
    result = '$' + amount + '00'
  } else {
    result = '$' + amount + '.00'
  }
  return result
}

console.log(formatMoney(39.99)) // $39.99
