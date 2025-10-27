import { useState } from "react";
import { analyzeFrequency } from "../utils/analyzeFrequency";
import { analyzeNgrams } from "../utils/analyzeNgrams";


export default function CipherInput({
  cipherText,
  setCipherText,
  setAnalysisData,
  setBigramData,       // 🔹 tambahkan
  setTrigramData,      // 🔹 tambahkan
}) {
  const handleAnalyze = () => {
    const data = analyzeFrequency(cipherText);
    setAnalysisData(data);

    const bigrams = analyzeNgrams(cipherText, 2);
    const trigrams = analyzeNgrams(cipherText, 3);
    setBigramData(bigrams);
    setTrigramData(trigrams);
  };

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-2">
        Cipher Text - (Input Teks Sandi)
      </h2>
      <textarea
        value={cipherText}
        onChange={(e) => setCipherText(e.target.value)}
        placeholder="memasukkan teks sandi (ciphertext) yang ingin dianalisis."
        className="w-full h-40 bg-gray-800 text-gray-100 p-2 rounded-lg resize-none"
      />
      <button
        onClick={handleAnalyze}
        className="mt-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
      >
        Analisis Sekarang
      </button>
    </div>
  );
}
