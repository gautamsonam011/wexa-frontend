"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Desktop",
    value: 70,
  },
  {
    name: "Mobile",
    value: 30,
  },
];

export default function DevicePieChart() {

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Device Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
          />

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}