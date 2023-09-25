const array = [0, 1, 2, 3, 4, 5];

const rotate = (head, k) => {
  if (k === 0) return head;
  if (k > 0) {
    console.log("ola");
    for (let i = 0; i < k; i++) {
      let lastItem = head[head.length - 1];
      head.pop();
      head.unshift(lastItem);
    }
  }
  if (k < 0) {
    k = Math.abs(k);
    console.log("ola");
    for (let i = 0; i < k; i++) {
      let firstItem = head[0];
      head.shift();
      head.push(firstItem);
    }
  }
  return head;
};

console.log(rotate(array, 2));
