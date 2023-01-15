/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let i = Math.floor((nums.length)/2)
    console.log(i)
    let leftArr = nums.splice(0,i)
    let rightArr = nums.splice(i-nums.length+1,nums.length)
    console.log(leftArr)
    console.log(rightArr)
};

console.log(pivotIndex([1,7,3,6,5,6]))
console.log(pivotIndex([1,2,3]))
console.log(pivotIndex([2,1,-1]))