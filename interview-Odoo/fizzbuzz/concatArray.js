let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

var merge = function (nums1, m, nums2, n) {
  let shortArr1 = nums1.splice(0, m);
  let shortArr2 = nums2.splice(0, n);

  return shortArr1.concat(shortArr2).sort();
};
var merge2 = function (nums1, m, nums2, n) {
  let firstArr = [];
  let secondArr = [];

  for (var i = 0; i < nums1.length; i++) {
    if (i >= m) {
      break;
    } else {
      firstArr.push(nums1[i]);
    }
  }
  for (var i = 0; i < nums2.length; i++) {
    if (nums2.length > n) {
      break;
    } else {
      secondArr.push(nums2[i]);
    }
  }
  const newArr = [...firstArr, ...secondArr];
  return newArr.sort();
};

// console.log(merge(nums1, m, nums2, n));
console.log(merge2(nums1, m, nums2, n));
