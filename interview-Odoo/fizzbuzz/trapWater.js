const trap = (height) => {
  const lMin = [Math.min(...height)];
  const rMin = [Math.min(...height)];
  let res = 0;
  lMin[0] = height[0];

  for (let i = 1; i < height.length; i++) {
    lMin[i] = Math.max(height[i], lMin[i - 1]);
  }
  //  console.log(lMin);
  rMin[height.length - 1] = height[height.length - 1];
  // console.log(rMin);
  for (let j = height.length - 2; j >= 0; j--) {
    rMin[j] = Math.max(height[j], rMin[j + 1]);
  }
  for (let k = 0; k < height.length; k++) {
    res = res + (Math.min(lMin[k], rMin[k]) - height[k]);
  }
  return res;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));

// Water stored += Math.min(leftmax[k],rightmax[k]) - height[k]
