const items = [
  { name: "Banana", quantity: 1, price: 1.95 },
  { name: "apple", quantity: 1, price: 1.45 },
  { name: "Banana", quantity: 10, price: 0.05 },
  { name: "candy", quantity: 1, price: 3.5 },
];

const results = [];
const duplicates = new Set();

// console.log(duplicates);

for (const item of items) {
  if (duplicates.has(item.name)) {
  } else {
    duplicates.add(item.name);
    results.push(item);
  }
}

console.log(results);
