"use client"

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jun", "New visitors": 200000, orders: 150000 },
  { name: "Jul", "New visitors": 250000, orders: 180000 },
  { name: "Aug", "New visitors": 180000, orders: 220000 },
  { name: "Sep", "New visitors": 300000, orders: 150000 },
  { name: "Oct", "New visitors": 628000, orders: 280000 },
  { name: "Nov", "New visitors": 200000, orders: 300000 },
  { name: "Dec", "New visitors": 250000, orders: 180000 },
  { name: "Jan", "New visitors": 300000, orders: 200000 },
];

export function ProfitChart() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Total Traffic</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-600">New Visitors</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <span className="text-sm text-gray-600">Orders</span>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="New visitors"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#E5E7EB"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
} 