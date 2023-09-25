const matrix = [
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
];

function riverSizes(matrix) {
  let sizes = [];
  const visitedMatrix = matrix.map((row) => row.map((col) => false));

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      let currentRiverSize = { value: 0 };
      console.log(matrix[row][col]);
      travelMatrix(matrix, col, row, visitedMatrix, currentRiverSize);
      // console.log(matrix[row][col]);
      if (currentRiverSize.value > 0) {
        sizes.push(currentRiverSize.value);
      }
    }
  }

  return sizes;
}
function travelMatrix(matrix, col, row, visitedMatrix, currentRiverSize) {
  if (visitedMatrix[row][col]) return;
  visitedMatrix[row][col] = true;
  if (matrix[row][col] === 0) return;
  currentRiverSize.value++;
  const neighbors = getNeighbors(matrix, row, col);
  for (const [row, col] of neighbors) {
    travelMatrix(matrix, col, row, visitedMatrix, currentRiverSize);
  }
}
function getNeighbors(matrix, row, col) {
  let neighbors = [];
  if (row !== 0) neighbors.push([row - 1, col]);
  if (col !== 0) neighbors.push([row, col - 1]);
  if (row !== matrix.length - 1) neighbors.push([row + 1, col]);
  if (col !== matrix[0].length - 1) neighbors.push([row, col + 1]);
  console.log(neighbors);
  return neighbors;
}

console.log(riverSizes(matrix));
