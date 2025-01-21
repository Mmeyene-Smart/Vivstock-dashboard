import { AreaChart, Area, ResponsiveContainer, CartesianGrid, Tooltip, Dot } from 'recharts';
import { useState } from 'react';

const generateData = (days) => {
  return Array.from({ length: days }, (_, i) => ({
    value: Math.random() * 20 + 10,
    date: i
  }));
};

const data = generateData(7); // Generate data for 7 days

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
  return (
    <div className="bg-transparent w-130% rounded-lg p-6 mb-8 relative top-[-40px] ">
      <div className="w-full h-[300px] relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full  opacity-10 blur-2xl transform translate-y-4"></div>
        </div>
        <ResponsiveContainer width="110%" height="90%" className="res-chart relative left-[-5%]">
          <AreaChart 
            data={data} 
            margin={{ top: 0, right: 0, bottom: 9, left: 0 }}
          >
            <defs>
              <linearGradient id="assetGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7d26cd" stopOpacity={0.4}/>
                <stop offset="100%" stopColor="#7d26cd" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#7d26cd"
              opacity={0.1}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="natural"
              dataKey="value"
              stroke="#7d26cd"
              strokeWidth={2}
              fill="url(#assetGradient)"
              dot={<Dot r={3} stroke="#7d26cd" strokeWidth={2} />}
              animationDuration={2000}
              animationEasing="ease-in-out"
              baseLine={0}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AssetChart;
