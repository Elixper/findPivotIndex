/**
 * @param {number[]} nums
 * @return {number}
 */

let arr = [1,-1,4, 1,-1]
let arr1 = [...arr]
let arr2 = [...arr]
console.log(arr1.slice(index-1))
console.log(arr2.slice(0).reduce((acc,val) => acc + val))
for ( let ind in arr) {
  if (arr1.slice(ind-1).reduce((acc,val) => acc + val) === arr2.slice(ind+1).arr.reduce((acc,val) => acc + val)) {
    console.log(ind)
  }
}




var pivotIndex = (nums) => {
// verifier à chaque indice que la somme à droite est égale à la somme à gauche
// index de 1 à 6 
let index = 5
console.log(index)
// accumuler à gauche de l'index
const beforePivot = (ind) => {
  let sum = nums.reduce((sum, n) => sum + n);
  leftSum = [sum]
  console.log(leftSum)
  for (let i = 1 ; i <= ind; i++) {
    console.log(sum)
    sum += nums[i]  
    console.log(sum)
    leftSum.push(sum)
    console.log(leftSum)
  }
  return leftSum
}
// accumuler à droite de l'index
const afterPivot = (ind) => {
  let sum = nums.reduce((sum, n) => sum + n);
  rightSum = [sum]
  console.log(rightSum)
  for (let i = 1 ; i <= ind; i++) {
    console.log(sum)
    sum -= nums[i-1]  
    console.log(sum)
    rightSum.push(sum)
    console.log(rightSum)
  }
  return rightSum
}

console.log(afterPivot(index))
console.log(beforePivot(index))
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// 1 7 3  = 11 
// 6 
// 5 6 = 11
// function partsSums(ls) {
//   let sum = ls.reduce((sum, n) => sum + n, 0)
//   res  = [sum]
//   for (let i = 1; i <= ls.length; i++){
//       sum -= ls[i-1]
//       res.push(sum )
//   }
//   return res
// }
// console.log(partsSums([1, 7, 3, 6, 5, 6]))
// function partsSums(ls) {
//   let sum = ls.reduce((sum, n) => sum + n, 0)
//   res  = [sum]
//   for (let i = 1; i <= ls.length; i++){
//       sum -= ls[i-1]
//       res.push(sum )
//   }
//   return res

// console.log(partsSums(ls))

  // if ((accum(nums)) - nums[0] === 0){
  //   return 0;
  // } else if (accum(nums) - nums[nums.length-1] === 0) {
  //   return nums.length-1
  // } else {
  // }
// use reduceright ? 

//   let newNums = [...nums];
//   let newNums2 = [...nums];

//   console.log(nums[i]);
//   let l = newNums.splice(0, i);
//   let r = newNums2.splice(i + 1, nums.length);
//   console.log(l)
//   console.log(r)
//   let accum = (arr) => arr.reduce((acc, curr) => acc + curr);
//   console.log(accum(l))
//   console.log(accum(r))
//  if (accum(l) > accum(r)) {
//     i = i-1;
//     console.log(i)
//     console.log(accum(l))
//  } else if (accum(l) < accum(r)) {
//     i = i+1;
//     console.log(i)
//     console.log(accum(l))
//  }
// }
// if (accum(l) === accum(r)) {
//   return i;


// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 1, 1, 0, 3]));
// console.log(pivotIndex([1, 2, 3]));
// console.log(pivotIndex([2, 1, -1]));
