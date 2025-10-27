import React from "react";

export default function NgramAnalysis({ bigrams, trigrams }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-3">N-gram Analysis</h2>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <h3 className="font-semibold mb-1">Top Bigrams</h3>
          <ul className="space-y-1">
            {bigrams.map(([pair, count]) => (
              <li key={pair} className="flex justify-between">
                <span>{pair}</span>
                <span className="text-gray-400">{count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Top Trigrams</h3>
          <ul className="space-y-1">
            {trigrams.map(([tri, count]) => (
              <li key={tri} className="flex justify-between">
                <span>{tri}</span>
                <span className="text-gray-400">{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
