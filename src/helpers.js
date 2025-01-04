const mathUtils = {
  isTriangle(a, b, c) {
    return a + b > c && c + b > a && c + a > b;
  },

  sum(...args) {
    let res = Number(args[0]);
    for (let i = 1; i < args.length; i += 1) {
      res += Number(args[i]);
      if (Number.isNaN(res)) {
        break;
      }
    }
    return res;
  },
};

const strUtils = {
  rep(s, count) {
    let res = '';
    for (let i = 0; i < count; i += 1) {
      res += s;
    }
    return res;
  },

  shuffle(str, oddChars = true) {
    let even = '';
    let odd = '';

    for (let i = 0; i < str.length; i += 2) {
      even += str[i];
      odd += str[i + 1] ?? '';
    }
    return oddChars ? `${even}${odd}` : `${odd}${even}`;
  },
};

const mxUtils = {
  get direction() {
    return {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1],
    };
  },

  create(size) {
    const mx = [];
    for (let i = 0; i < size; i += 1) {
      mx[i] = [];
    }
    return mx;
  },

  getItemsCount(size, turn = 0) {
    const sz = size || 0;
    const sizePerTurn = Math.max(sz - 2 * turn, 0);

    return {
      sizePerTurn,
      itemsPerTurn: Math.max((sizePerTurn - 1) * 4 || 1, 0),
    };
  },
};

module.exports = {
  mathUtils,
  strUtils,
  mxUtils,
};
