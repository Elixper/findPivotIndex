/**
 * @param {number[]} nums
 * @return {number}
 */

let arr = [0,1,-1]
console.log(arr.slice(0,3))


const findPivotIndex = (arr) => {
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
    // } else {
    //   return "not found"
    // }
    // console.log(i,leftArray,sumArray(leftArray)===sumArray(rightArray))
    // console.log(i,rightArray)
  }
}
}
// console.log(findPivotIndex(arr)) 
console.log(findPivotIndex([1, 7, 3, 6, 5, 6]));
