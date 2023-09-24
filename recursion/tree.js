const mine = {
  gold: 3,
  left: {
    gold: 2,
    left: {
      gold: 4,
    },
    right: {
      gold: 1,
    },
  },
  right: {
    gold: 5,
    left: {
      gold: 1,
    },
  },
};

const countGold = (level) => {
  let wall = level.gold;
  console.log(wall);
  if (level.left) {
    wall += countGold(level.left);
    console.log(`left ${wall}`);
  }
  if (level.right) {
    wall += countGold(level.right);
  }
  return wall;
};

const result = countGold(mine);
console.log(result);
