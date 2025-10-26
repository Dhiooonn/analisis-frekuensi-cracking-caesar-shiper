export default function PlaintextOutput({ text }) {
  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-3">Decrypted Text - (Hasil)</h2>
      <div className="bg-gray-800 p-3 rounded-lg min-h-[100px] whitespace-pre-wrap">
        {text || <span className="text-gray-500">Hasil plaintext akan muncul di sini...</span>}
      </div>
    </div>
  );
}
