import React from "react";

const commonLetters = ["E", "T", "A", "O", "I", "N", "S", "H", "R", "D", "L", "C"];

export default function SubstitutionPanel({ substitutions, setSubstitutions, onReset }) {
  const handleChange = (cipherLetter, newLetter) => {
    setSubstitutions({
      ...substitutions,
      [cipherLetter]: newLetter,
    });
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Substitution Mapping - (Pemetaan Huruf)</h2>
        <button
          onClick={onReset}
          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm"
        >
          Reset
        </button>
      </div>

      {/* Deskripsi */}
      <div className="mb-4 text-gray-400 text-sm">
        <p>
          Bagian ini digunakan untuk menentukan huruf plaintext pengganti dari setiap huruf pada ciphertext.
          <br /> Misalnya:
          <br />• A → E berarti setiap huruf A pada ciphertext diterjemahkan menjadi huruf E.
          <br />• B → T berarti setiap huruf B pada ciphertext berubah menjadi T.
          <br />
          Mapping ini bisa diatur manual berdasarkan tebakan atau hasil analisis frekuensi huruf.
        </p>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((cipherLetter) => (
          <div key={cipherLetter} className="flex flex-col items-center text-sm">
            <span className="text-gray-400">{cipherLetter}</span>
            <select
              value={substitutions[cipherLetter] || ""}
              onChange={(e) => handleChange(cipherLetter, e.target.value)}
              className="mt-1 p-1 bg-gray-800 border border-gray-700 rounded-md text-white"
            >
              <option value="">-</option>
              {commonLetters.map((letter) => (
                <option key={letter} value={letter}>
                  {letter}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
