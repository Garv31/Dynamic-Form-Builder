"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", responses: 30 },
  { month: "Feb", responses: 45 },
  { month: "Mar", responses: 60 },
  { month: "Apr", responses: 40 },
  { month: "May", responses: 80 },
  { month: "Jun", responses: 95 },
];

export default function AnalyticsChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 h-[400px]">
      <h2 className="text-xl font-semibold mb-6">
        Form Responses Analytics
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="responses"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}