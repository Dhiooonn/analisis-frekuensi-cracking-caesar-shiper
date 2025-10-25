import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function FrequencyChart({ data }) {
  if (!data.length) return null;

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-3">Letter Frequency</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="letter" stroke="#ccc" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="frequency" fill="#3b82f6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
