function number(busStops: [number, number][]): number {
  const state = { count: 0 };

  for (let k = 0; k < busStops.length; k++) {
    state.count += busStops[k][0];
    state.count -= busStops[k][1];
  }

  return state.count
}
