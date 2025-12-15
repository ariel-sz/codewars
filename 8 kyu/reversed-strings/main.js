
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  const strToArray = str.split('')
  const reversedArray = strToArray.reverse()
  const joinedString = reversedArray.join('')
  return joinedString
}