export default function FrequencyInfo({ data }) {
  if (!data || data.length === 0) return null;

  const sorted = [...data].sort((a, b) => b.frequency - a.frequency);
  const top3 = sorted.slice(0, 3).map(item => item.letter).join(", ");

  return (
    <div className="mt-6 p-4 bg-gray-800/60 border border-gray-700 rounded-xl">
      <h3 className="text-lg font-semibold text-white mb-2">Informasi Analisis Frekuensi</h3>
      <p className="text-gray-300 leading-relaxed text-sm">
        Berdasarkan hasil grafik di atas, huruf yang paling sering muncul dalam ciphertext adalah
        <span className="text-blue-400 font-medium"> {top3} </span>. 
        Dalam analisis kriptografi (frequency analysis), huruf-huruf ini biasanya dibandingkan dengan huruf 
        yang paling sering muncul dalam bahasa alami (contoh: E, T, A dalam bahasa Inggris atau A, N dalam Bahasa Indonesia)
        untuk membantu menentukan kemungkinan substitusi huruf.
      </p>
    </div>
  );
}
