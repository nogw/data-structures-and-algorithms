function multiplicationTable(size: number): number[][] {
  const table: number[][] = Array.from({ length: size }, () => []);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      table[i][j] = (i + 1) * (j + 1);
    }
  }

  return table;
}

