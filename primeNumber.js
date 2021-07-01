const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Please enter number of inputs you want to enter `, async number => {
  if (number < 1 || number > 10) {
    console.log('Please enter the number of inputs in between 1 - 10')
  } else {
    recursiveAsyncReadLine(number);
  }
})
var ranges = [];
var recursiveAsyncReadLine = function (number) {
  readline.question('Enter the ranges with space : ', function (answer) {
    var inputOne = answer.split(' ')[0]
    var inputTwo = answer.split(' ')[1]
    if (inputOne >= 2 && inputOne <= inputTwo) {
      ranges.push(answer)
      if (ranges.length != number) {
        recursiveAsyncReadLine(number);
      } else {
        for(var j = 0; j < ranges.length; j++) {
          var numbers = ranges[j].split(' ')
          var primeNumberArray = []
          var maxDifference = -1
          var testCase = j + 1
          for (let i = numbers[0]; i <= numbers[1]; i++){
            if(isPrime(i)){
              primeNumberArray.push(i)
            }
          }
          if (primeNumberArray.length >= 1) {
            maxDifference = primeNumberArray[primeNumberArray.length - 1] - primeNumberArray[0]
          }
          if (maxDifference < 0) {
            console.log('Test Case: ' + testCase + ' No prime number in the given range. Output = -1')
          } else if (maxDifference === 0) {
            console.log('Test Case: ' + testCase + ' The difference would be 0 since there is only one prime number in the given range')
          } else {
            console.log('Test Case: ' + testCase + ' [ ' + primeNumberArray[primeNumberArray.length - 1] + ' - ' + primeNumberArray[0] + ' ] = ' + maxDifference)
          }
        }
        return readline.close();
      }
    } else {
      if (inputOne < 2 || inputOne > inputTwo) {
        console.log('input one should be greater than 2 and less than ' + inputTwo)
      }
      if (inputTwo < inputOne || inputTwo > 1000000) {
        console.log('input two should be greater than ' + inputOne + ' and less than or equal to 1000000')
      }
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
