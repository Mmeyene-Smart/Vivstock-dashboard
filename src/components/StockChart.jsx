import { useState } from 'react';
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts';

const generateData = (days) => {
  return Array.from({ length: days }, (_, i) => ({
    value: Math.random() * 2000 + 1000,
    date: i
  }));
};

const timeframeData = {
  '7d': generateData(7),
  '1m': generateData(30),
  '3m': generateData(40),
};

function StockChart() {
  const [timeframe, setTimeframe] = useState('7d');

  const handleTrade = (type) => {
    console.log(`${type} order`);
  };

  return (
    <div className="relative px-4 sm:px-0">
      <div className="flex gap-4 mb-4 overflow-x-auto scrollbar-hide">
        {Object.keys(timeframeData).map((tf) => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
              timeframe === tf
                ? 'bg-[#1E1E1E] text-white'
                : 'text-gray-400'
            }`}
          >
            {tf.toUpperCase()}
          </button>
        ))}
      </div>
      
      <div className="w-full h-[200px] sm:h-[300px] relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[#7F3DFF] opacity-10 blur-2xl transform translate-y-4"></div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={timeframeData[timeframe]}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#00B087" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 w-full">
        <div className="flex gap-4">
          <button
            onClick={() => handleTrade('buy')}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
          >
            Buy
          </button>
          <button
            onClick={() => handleTrade('sell')}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
}

export default StockChart;