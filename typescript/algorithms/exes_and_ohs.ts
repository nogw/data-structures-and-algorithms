function xo(str: string): boolean {
  return str.toLowerCase().split("").reduce((accu, curr) => {
    return curr === "x" ? accu - 1 : curr === "o" ? accu + 1 : accu
  }, 0) === 0
}
