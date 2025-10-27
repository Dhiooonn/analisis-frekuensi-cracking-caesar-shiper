import { englishFrequencies } from "../utils/englishFrequency";

export default function EnglishFrequencyInfo() {
  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow mt-4">
      <h2 className="text-xl font-semibold mb-2">Frekuensi Huruf Bahasa Inggris</h2>
      <p className="text-sm text-gray-400 mb-3">
        Persentase rata-rata kemunculan tiap huruf berdasarkan analisis teks bahasa Inggris.
      </p>

      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 text-center">
        {englishFrequencies.map(({ letter, freq }) => (
          <div
            key={letter}
            className="bg-gray-800 rounded-lg py-2 hover:bg-gray-700 transition"
          >
            <p className="text-lg font-bold text-blue-400">{letter}</p>
            <p className="text-xs text-gray-300">{freq}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
