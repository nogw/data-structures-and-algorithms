function duplicateEncode(word: string) {
  const charCount = new Map<string, number>();
  
  for (const char of word.toLowerCase()) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1);
  }

  return [...word.toLowerCase()].map((char) =>
    charCount.get(char) === 1 ? '(' : ')'
  ).join('');
}

