const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Please enter number of inputs you want to enter `, async number => {
  recursiveAsyncReadLine(number);
})
var ranges = [];
var recursiveAsyncReadLine = function (number) {
  readline.question('Enter the ranges with space : ', function (answer) {
    ranges.push(answer)
    if (ranges.length != number) {
      recursiveAsyncReadLine(number);
    } else {
      for(var j = 0; j < ranges.length; j++) {
        var numbers = ranges[j].split(' ')
        var primeNumberArray = []
        var maxDifference = -1
        for (let i = numbers[0]; i <= numbers[1]; i++){
          if(isPrime(i)){
            primeNumberArray.push(i)
          }
        }
        if (primeNumberArray.length >= 1) {
          maxDifference = primeNumberArray[primeNumberArray.length - 1] - primeNumberArray[0]
        }
        if (maxDifference < 0) {
          console.log('No prime number in the given range. Output = -1')
        } else if (maxDifference === 0) {
          console.log('The difference would be 0 since there is only one prime number in the given range')
        } else {
          console.log('[ ' + primeNumberArray[primeNumberArray.length - 1] + ' - ' + primeNumberArray[0] + ' ] = ' + maxDifference)
        }
      }
      return readline.close();
    }
  })
}

function isPrime(number) {
  if (number <= 1) {
    return false
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false
      }
    }
    return true
  }
}
