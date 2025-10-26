import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function FrequencyChart({ data }) {
  if (!data.length) return null;

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow">
      <div className="mb-5">
        <h2 className="text-xl font-semibold">Letter Frequency</h2>
        <p className="text-gray-400">grafik batang (bar chart) huruf-huruf yang paling sering muncul di ciphertext</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="letter" stroke="#ccc" />
          <YAxis />
          <Tooltip
            cursor={{ fill: "rgba(59, 130, 246, 0.2)" }} // warna hover bar
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "none",
            }}
            labelStyle={{ color: "#000" }}
            itemStyle={{ color: "#3b82f6" }}
          />
          <Bar dataKey="frequency" fill="#3b82f6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
