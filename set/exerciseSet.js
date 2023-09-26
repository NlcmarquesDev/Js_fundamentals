const points = [10, 20, 30, 15, 15, 35, 60, 10];
// const unique = new Set();

// for (let i = 0; i < points.length; i++) {
//   if (unique.has(points[i])) {
//     console.log(points[i]);
//     break;
//   } else {
//     unique.add(points[i]);
//   }
// }

// // console.log(points);
// // console.log(unique);

const unique = [...new Set(points)];
console.log(unique);
