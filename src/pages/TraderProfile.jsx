import { useParams, useNavigate } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const data = Array.from({ length: 100 }, (_, i) => ({
  value: Math.random() * 30 + 20
}));

export default function TraderProfile() {
  const { traderId } = useParams();
  const navigate = useNavigate();
  const winRate = 83.15; // Win rate percentage

  return (
    <div className="px-4 py-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 hover:bg-[#1E1E1E] rounded-full relative top-[-125px] mb-[20px] transition-colors"
        >
          <IoArrowBack size={24} />
        </button>
        <div className="w-16 h-16 bg-purple-600 rounded-full absolute top-[10px] mt-[30px] left-[-5px] ml-[20px] xl:left-[33%]"></div>
        <div className="relative top-[90px] mb-[70px]  left-[-50px]">
          <h1 className="text-[24px]  md:text-2xl font-bold">{traderId}</h1>
          <div className="flex items-center font-normal gap-2  text-[0.63003123rem] md:text-[12px] text-[#7c7979]">
            <span>@{traderId}</span>
            <span> | 📑 Registered 1380 day(s) ago</span>
           
          </div>
          <p className="text-[12.5px] md:text-[16px] mb-[20px] text-[#d0d0d0]">Trading Stocks in a profitable and strategic way</p>
          <button className="bg-[#202020]  w-[100px] text-white py-[10px] px-2  relative top-[-10px] rounded-[20px] font-[syne] font-medium flex items-center justify-center gap-2 text-[15px]">
            High TRV
          </button>

          <Link to="https://t.me/+l7lRXSg24W5lMTcx">
            <button className="w-[110%] bg-white h-[45px] text-black mb-[20px] top-[5px] relative text-[20px]  font-[Poppins] font-semibold rounded-[50px] hover:bg-gray-100 transition-colors">
              Copy 
            </button>
          </Link>
        </div>
        <div className="ml-auto absolute top-[115px] left-[20rem]">
          <div className="bg-yellow-500 w-8 h-8 rounded-full flex text-[#000] text-2xl font-bold items-center justify-center">
            ✓
          </div>
        </div>
      </div>

      <div className="bg-tranparent border border-white rounded-lg p-6 mb-6">
        <div className="text-xs md:text-sm uppercase mb-4">Performance</div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <div className="text-xl md:text-3xl font-bold text-green-500">+7644.26%</div>
            <div className="text-xs md:text-sm text-gray-400">ROV</div>
          </div>
          <div className="text-right">
            <div className="text-xl md:text-3xl font-bold">$331743.23</div>
            <div className="text-xs md:text-sm text-gray-400">Total Profit</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-400">Maximum drawdown</span>
            <span>205%</span>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-400">Total followers</span>
            <span>1,080</span>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-400">Trading frequency</span>
            <span>10</span>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-400">Win rate</span>
            <span>{winRate}%</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-xs md:text-sm mb-2">Trading Performance</div>
          <div className="h-[24px] bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full text-white pl-[10px] bg-green-to-red transition-all duration-500"
           
            >Profitable Trades {winRate}%</div>
          </div>
          
        </div>
        <div className="text-xs md:text-sm mt-[10px] text-center mb-4 bg-gray-800 rounded-[10px]">The displayed data is up-to-date and not tied to any specific reporting periods.</div>
        
        <div className="text-xl md:text-2xl font-bold mb-2">400/500</div>
        <div className="text-xs md:text-sm text-gray-400 mb-6">Current Copiers</div>

        <div className="space-y-4">
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-400">AUM</span>
            <span>$48,438.64</span>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-400">Total assets</span>
            <span>******</span>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-400">Last trade</span>
            <span>2025/1/29 12:18:34</span>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-400">Profit share ratio</span>
            <span>20%</span>
          </div>
        </div>
      </div>
    </div>
  );
}