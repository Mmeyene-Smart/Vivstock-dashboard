import { AreaChart, Area, ResponsiveContainer, CartesianGrid } from 'recharts';


const data = [
  { time: '04:00', value: 50 },
  { time: '05:00', value: 150 },
  { time: '06:00', value: 80 },
  { time: '07:00', value: 200 },
  { time: '08:00', value: 120 },
  { time: '09:00', value: 250 },
  { time: '10:00', value: 180 },
  { time: '11:00', value: 300 },
  { time: '12:00', value: 220 },
  { time: '13:00', value: 280 },
  { time: '14:00', value: 200 },
  { time: '15:00', value: 350 },
  { time: '16:00', value: 280 },
  { time: '17:00', value: 400 }
];

function ActivityChart() {
  return (
    <div className="bg-transparent  w-130% rounded-lg p-6 mb-8">
      <div className="w-full h-[300px] relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[#7F3DFF] opacity-10 blur-2xl transform translate-y-4"></div>
        </div>
        <ResponsiveContainer  width="110%" height="90%" className="res-chart relative left-[-5%] ">
          <AreaChart 
            data={data} 
            margin={{ top: 0, right: 0, bottom: 9, left: 0 }}
          >
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7F3DFF" stopOpacity={0.4}/>
                <stop offset="100%" stopColor="#7F3DFF" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#7F3DFF"
              opacity={0.1}
            />
            <Area
              type="natural"
              dataKey="value"
              stroke="#fff"
              strokeWidth={2}
              fill="url(#colorGradient)"
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

export default ActivityChart;