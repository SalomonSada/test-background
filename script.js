const room = [1, 2, 3, 1, 2, 1];

// the best until now
const cleanRoom1 = room.filter((n) => {
  for (let i = 0; i < room.length; i++) {
    return n === room[i];
  }
});

// 2
const add = (a, b) =>
  a.filter((n) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== n) {
        if (n + a[i] === b) {
          return n;
        }
      }
    }
  });
