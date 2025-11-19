import React, { useState } from "react";

export default function ShiftTester({ ciphertext, onApplyShift }) {
  const [shift, setShift] = useState(0);
  const [mode, setMode] = useState("decrypt"); // encrypt / decrypt
  const [showAll, setShowAll] = useState(false);

  // Fungsi utama Caesar Cipher
  const applyShift = (text, shiftValue) => {
    return text.replace(/[A-Za-z]/g, (char) => {
      const isUpper = char >= "A" && char <= "Z";
      const base = isUpper ? 65 : 97;
      const normalizedShift = mode === "decrypt" ? shiftValue : -shiftValue;

      return String.fromCharCode(
        ((char.charCodeAt(0) - base + normalizedShift + 26) % 26) + base
      );
    });
  };

  const shiftedText = applyShift(ciphertext, shift);

  // Highlight huruf berubah
  const renderHighlighted = (original, shifted) => {
    return shifted.split("").map((char, i) => {
      const changed =
        original[i]?.toLowerCase() !== char.toLowerCase() &&
        /[A-Za-z]/.test(original[i]);

      return (
        <span key={i} className={changed ? "text-yellow-400" : ""}>
          {char}
        </span>
      );
    });
  };

  // Auto-generate seluruh shift 0–25
  const allShiftResults = Array.from({ length: 26 }, (_, i) => ({
    shift: i,
    text: applyShift(ciphertext, i),
  }));

  return (
    <div className="bg-gray-900 p-5 rounded-xl shadow-lg mt-4">
      <h2 className="text-2xl font-semibold mb-3">Caesar Cipher Tester</h2>

      <p className="text-gray-400 text-sm mb-4">
        Uji apakah ciphertext menggunakan Caesar Cipher. Gunakan berbagai shift
        dan mode enkripsi untuk menganalisis pola.
      </p>


      {/* SHIFT CONTROLS */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setShift((s) => (s + 25) % 26)}
          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-white"
        >
          -1
        </button>

        <input
          type="number"
          min="0"
          max="25"
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
          className="w-20 p-1 bg-gray-800 border border-gray-700 rounded text-white text-center"
        />

        <button
          onClick={() => setShift((s) => (s + 1) % 26)}
          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-white"
        >
          +1
        </button>

        <button
          onClick={() => onApplyShift(shift)}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white"
        >
          Terapkan Shift
        </button>

        <button
          onClick={() => navigator.clipboard.writeText(shiftedText)}
          className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white"
        >
          Copy
        </button>
      </div>

      {/* HASIL SHIFT */}
      <div className="bg-gray-800 p-4 rounded text-gray-200 text-sm whitespace-pre-wrap mb-4">
        {renderHighlighted(ciphertext, shiftedText)}
      </div>

      {/* TOGGLE SHOW ALL */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="px-3 py-1 bg-purple-700 hover:bg-purple-800 rounded text-white mb-4"
      >
        {showAll ? "Sembunyikan Semua Shift" : "Tampilkan Semua Shift (0–25)"}
      </button>

      {/* TABEL ALL RESULTS */}
      {showAll && (
        <div className="bg-gray-800 p-4 rounded-lg max-h-80 overflow-auto">
          {allShiftResults.map(({ shift, text }) => (
            <div
              key={shift}
              className="p-2 border-b border-gray-700 hover:bg-gray-700/50 rounded"
            >
              <div className="flex justify-between items-center mb-1">
                <strong className="text-blue-400">Shift {shift}</strong>
                <button
                  onClick={() => navigator.clipboard.writeText(text)}
                  className="px-2 py-1 bg-green-600 hover:bg-green-700 rounded text-xs text-white"
                >
                  Copy
                </button>
              </div>
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
