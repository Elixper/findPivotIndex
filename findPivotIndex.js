/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let i = Math.floor(nums.length / 2);
  let newNums = [...nums];
  let newNums2 = [...nums];
  console.log(i);
  let leftArr = newNums.splice(0, i);
  let rightArr = newNums2.splice(i + 1, nums.length);
  let accum = (arr) => arr.reduce((acc, curr) => acc + curr);
  if (accum(leftArr) === accum(rightArr)) {
    return i;
  } else if (accum(leftArr) > accum(rightArr)) {
     i = i-1;
     console.log(i)
     console.log(accum(leftArr))
  } else {
     i = i+1;
     console.log(i)
     console.log(accum(leftArr))
  }
  console.log(accum(leftArr));
  console.log(accum(rightArr));
  console.log(leftArr);
  console.log(rightArr);
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
