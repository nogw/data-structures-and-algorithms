function accum(s: string): string {
  return s.toUpperCase()
    .split("")
    .map((e, i) => `${e}${e.toLowerCase().repeat(i)}`)
    .join("-")
}
