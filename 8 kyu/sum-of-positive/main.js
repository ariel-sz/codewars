// Task
// You get an array of numbers, return the sum of all of the positives ones.
// Note
// If there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
let sum = 0
  arr.forEach((myElement) => {
    if (myElement > 0) {
      sum += myElement
    }
  })
return sum
}