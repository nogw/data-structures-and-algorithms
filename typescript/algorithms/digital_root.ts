const digitalRoot = (n: number): number => {
  while (n >= 10) {
    n = n.toString().split("").map(x => parseInt(x)).reduce((accu, curr) => accu + curr, 0)
  }

  return n
};
