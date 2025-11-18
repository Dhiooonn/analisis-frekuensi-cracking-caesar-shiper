export default function FrequencyInfo({ data }) {
  if (!data || data.length === 0) return null;

  // Urutkan frekuensi dari terbesar ke terkecil
  const sorted = [...data].sort((a, b) => b.frequency - a.frequency);
  const topLetters = sorted.slice(0, 3).map((item) => item.letter).join(", ");

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-2">Informasi Analisis Frekuensi</h2>
      <p>
        Berdasarkan hasil grafik di atas, huruf yang paling sering muncul dalam ciphertext adalah{" "}
        <span className="font-bold text-blue-400">{topLetters}</span>.
      </p>
      <p className="mt-2">
        Dalam analisis kriptografi (<i>frequency analysis</i>), huruf-huruf ini biasanya dibandingkan
        dengan huruf yang paling sering muncul dalam bahasa alami untuk menentukan kemungkinan
        substitusi huruf.
      </p>
      <ul className="mt-3 text-sm space-y-1 text-gray-300">
        <li>• Bahasa Inggris → <span className="text-blue-400">E, T, A, O, I, N</span></li>
        <li>• Bahasa Indonesia → <span className="text-blue-400">A, N, I, U, G, R</span></li>
      </ul>
    </div>
  );
}
