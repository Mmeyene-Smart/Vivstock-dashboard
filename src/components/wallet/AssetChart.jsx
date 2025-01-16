import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { useState } from 'react';

const generateData = (days) => {
  return Array.from({ length: days }, (_, i) => ({
    value: Math.random() * 20 + 10,
    date: i
  }));
};

const timeframeData = {
  '7d': generateData(7),
  '30d': generateData(30),
  '90d': generateData(90),
  '180d': generateData(180)
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1E1E] p-2 rounded-lg border border-gray-700">
        <p className="text-white font-medium">
          ${payload[0].value.toFixed(2)}
        </p>
      </div>
    );
  }
  return null;
};

function AssetChart() {
  const [timeframe, setTimeframe] = useState('7d');

  return (
    <div className="relative h-[200px] mb-4">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[#FFB800] opacity-10 blur-2xl transform translate-y-4"></div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={timeframeData[timeframe]}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <defs>
            <linearGradient id="assetGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFB800" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#FFB800" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#FFB800" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AssetChart;