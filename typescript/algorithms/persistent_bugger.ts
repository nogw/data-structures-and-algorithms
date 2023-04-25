function persistence(num: number): number {
  const state = {
    current: String(num),
    count: 0
  }

  while (state.current.length > 1) {
    console.log(state.current);

    state.current = state.current.split("").map(el => Number(el)).reduce((acc, curr) => acc * curr).toString();
    state.count += 1;
  }

  return state.count
}
