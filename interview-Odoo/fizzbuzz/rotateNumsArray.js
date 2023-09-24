//rotate all the elements to the right

const rotateArray = (nums, k) => {
  for (let i = 0; i < k; i++) {
    const removeLast = nums.pop();
    nums.unshift(removeLast);
  }
  return nums;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray([-1, -100, 3, 99], 2));
