function getSecondLargest(nums){
  let numsArray;
  numsArray = nums.sort((a, b) => a - b);
  numsArray = nums.filter((item, pos, ary) => !pos || item != ary[pos - 1]);
  
  let secondBiggest = numsArray.length - 2;
  return numsArray[secondBiggest];
}