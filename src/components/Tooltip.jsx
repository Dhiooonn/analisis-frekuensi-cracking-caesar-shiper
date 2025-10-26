const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white p-2 rounded-md shadow-md text-sm border border-gray-700">
        <p className="font-semibold">Huruf: {label}</p>
        <p>Frekuensi: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};
