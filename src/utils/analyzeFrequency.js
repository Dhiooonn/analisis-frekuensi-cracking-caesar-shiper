export function analyzeFrequency(text) {
  const freq = {};
  const cleaned = text.toUpperCase().replace(/[^A-Z]/g, "");

  for (const char of cleaned) {
    freq[char] = (freq[char] || 0) + 1;
  }

  const total = cleaned.length;
  const result = Object.entries(freq)
    .map(([letter, count]) => ({
      letter,
      count,
      frequency: Number(((count / total) * 100).toFixed(2)), 
    }))
    .sort((a, b) => b.count - a.count);

  return result;
}
