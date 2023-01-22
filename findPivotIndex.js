/**
 * @param {number[]} nums
 * @return {number}
 */

const findPivotIndex = (arr) => {
const check = (arr) => {
  let sumArray = (arr) => {
    let sum = 0
    arr.forEach(el => sum+=el)
    return sum
  }
  for (let i = 0 ; i <= arr.length; i++) {
    let leftArray = arr.slice(0,i);
    let rightArray = arr.slice(i+1,arr[arr.length])
    if (sumArray(leftArray) === sumArray(rightArray)) {
      return i
  }
}
}
return check(arr)&&check(arr)<arr.length||check(arr)===0?check(arr):-1
}