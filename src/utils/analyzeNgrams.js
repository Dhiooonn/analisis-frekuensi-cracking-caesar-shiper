export function analyzeNgrams(text, n = 2) {
  const clean = text.toUpperCase().replace(/[^A-Z]/g, "");
  const counts = {};
  
  for (let i = 0; i <= clean.length - n; i++) {
    const ngram = clean.slice(i, i + n);
    counts[ngram] = (counts[ngram] || 0) + 1;
  }

  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10); // ambil 10 besar
  
  return sorted;
}
