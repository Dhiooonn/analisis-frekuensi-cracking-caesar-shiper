import React, { useState } from "react";

export default function ShiftTester({ ciphertext, onApplyShift }) {
  const [shift, setShift] = useState(0);

  const applyShift = (text, shiftValue) => {
    return text.replace(/[A-Z]/gi, (char) => {
      const base = char === char.toUpperCase() ? 65 : 97;
      return String.fromCharCode(
        ((char.charCodeAt(0) - base + shiftValue + 26) % 26) + base
      );
    });
  };

  const shiftedText = applyShift(ciphertext, shift);

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">Caesar Shift Tester</h2>

      <p className="text-gray-400 text-sm mb-3">
        Gunakan fitur ini untuk mencoba apakah ciphertext adalah Caesar Cipher.
        Jika hasilnya tidak membentuk kalimat logis, lanjutkan analisis manual.
      </p>

      <div className="flex items-center gap-3 mb-4">
        <label className="text-gray-300">Shift:</label>
        <input
          type="number"
          min="0"
          max="25"
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
          className="w-20 p-1 bg-gray-800 border border-gray-700 rounded text-white"
        />

        <button
          onClick={() => onApplyShift(shift)}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm"
        >
          Terapkan Shift
        </button>
      </div>

      <div className="bg-gray-800 p-3 rounded text-gray-200 text-sm whitespace-pre-wrap">
        {shiftedText}
      </div>
    </div>
  );
}
