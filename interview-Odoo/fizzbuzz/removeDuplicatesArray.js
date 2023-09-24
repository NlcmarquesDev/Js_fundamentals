var removeDuplicates = function (nums) {
  let newArray = [nums[0], nums[1]];

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] === nums[i - 2]) {
      nums[i] = "";
      // newArray.push('_')
    } else {
      newArray.push(nums[i]);
    }
  }
  const lengthArrary = newArray.length;
  return `${lengthArrary},  ${newArray}`;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 6, 6, 6, 7]));
