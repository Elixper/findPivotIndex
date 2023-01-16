/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let i = Math.floor(nums.length / 2);
  let accum = (arr) => arr.reduce((acc, curr) => acc + curr);

  if ((accum(nums)) - nums[0] === 0){
    return 0;
  } else if (accum(nums) - nums[nums.length-1] === 0) {
    return nums.length-1
  } else {
  }

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
}


console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 1, 1, 0, 3]));
// console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
