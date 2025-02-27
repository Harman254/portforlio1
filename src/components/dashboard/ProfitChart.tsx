"use client"

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

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

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border dark:border-gray-700">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p
            key={index}
            className="text-sm"
            style={{ color: entry.color }}
          >
            {`${entry.name}: ${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function ProfitChart() {
  return (
    <Card className="p-3 md:p-4 lg:p-6">
      <div className="flex flex-col space-y-3 md:space-y-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold dark:text-white">Total Traffic</h2>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">New Visitors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Orders</span>
            </div>
          </div>
        </div>

        <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 5,
                left: -20,
                bottom: 5,
              }}
            >
              <XAxis 
                dataKey="name"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tick={{ fill: 'currentColor' }}
                className="text-gray-600 dark:text-gray-400"
              />
              <YAxis
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tick={{ fill: 'currentColor' }}
                className="text-gray-600 dark:text-gray-400"
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="New visitors"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#9CA3AF"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
} 