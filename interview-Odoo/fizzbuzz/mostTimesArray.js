// const mostCommontString = (str) => {
//   const commonStrings = {};
//   for (let st in str) {
//     if (commonStrings[str[st]] === undefined) {
//       commonStrings[str[st]] = 1
//     } else {
//       commonStrings[str[st]]++;
//    }
//   }
//   let maxEntry;
//   let maxValue = 0; 

//   for (let commonString in commonStrings) { 
//     if (commonStrings[commonString] > maxValue) { 
//       maxEntry = commonString;
//       maxValue = commonStrings[commonString];
//     }
//   }
//   return maxEntry;
// }

// console.log(mostCommontString(['a', 'b', 'c', 'c', 'b', 'b', 'c', 'c', 'x'])); // console

const mostCommontString = ['a', 'b', 'c', 'b', 'b', 'b', 'c', 'c', 'x']; // console


mostCommontString.map((letter)=>{console.log(letter + 'Hola');})
