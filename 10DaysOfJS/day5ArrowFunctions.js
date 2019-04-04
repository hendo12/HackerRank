const modifyArray = (nums) => {
  const newNums = nums.map((num) => {
      if (num % 2 === 0) {
          return num * 2;
      } else {
          return num * 3;
      }
  })
  return newNums;
}