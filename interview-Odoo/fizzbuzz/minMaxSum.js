function minMaxSum(arr) {
  const orderedArr = arr.sort();
  const minElement = orderedArr[0];
  const maxElement = orderedArr[orderedArr.length - 1];

  let sum = orderedArr.reduce((acc, element) => {
    return acc + element;
  });
  //outra forma neste caso para obter o valor total do array
  // let sum = 0;
  // for (let i = 0; i < orderedArr.length; i++) {
  //     sum = sum +arr[i]
  // }
  let maxSum = sum - minElement;
  let minSum = sum - maxElement;

  console.log(minSum, maxSum);
}

minMaxSum([1, 3, 5, 7, 9]);
minMaxSum([15, 2, 6, 13, 88]);
minMaxSum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
