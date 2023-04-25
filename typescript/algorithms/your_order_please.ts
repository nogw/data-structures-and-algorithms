function order(words: string): string {
  if (words.length === 0) return "";

  return words.split(" ")
    .map((word) => ({ word, num: Number((word.match(/\d+/) || [])[0]) }))
    .sort((a, b) => a.num - b.num)
    .map(({ word }) => word)
    .join(" ");
}

