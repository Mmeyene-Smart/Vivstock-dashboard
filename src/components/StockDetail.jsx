import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { IoMdHeart } from 'react-icons/io';
import { stockData } from '../data/stockData';
import StockMetrics from './stock/StockMetrics';

function StockDetail() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');
  const [isLiked, setIsLiked] = useState(false);
  const [timeframe, setTimeframe] = useState('7d');
  const stock = stockData.find(s => s.symbol === symbol);

  if (!stock) return null;

  const stats = {
    open: '₦25.95',
    high: '₦26.95',
    low: '₦22.55',
    volume: '0.00',
    avgVol: '---',
    mktCap: '---'
  };

  const chartImages = {
    '7d': 'https://www.tradingview.com/x/Xm7fKYYr/',
    '1m': 'https://www.tradingview.com/x/h285ot5S/',
    '3m': 'https://www.tradingview.com/x/5hHRnKH1/'
  };

  const handleTrade = (type) => {
    console.log(`${type} order`);
  };

  return (
    <div className="min-h-screen max-w-5xl mx-auto font-['DM Sans'] px-4 sm:px-6 lg:px-8">
      <div className="py-4 sm:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-[#1E1E1E] rounded-full transition-colors"
          >
            <IoArrowBack size={24} />
          </button>
          <h1 className="text-lg sm:text-xl font-bold">{stock.symbol}</h1>
          <IoMdHeart 
            size={24} 
            className={`${isLiked ? 'text-purple-500' : 'text-white'} cursor-pointer transition-colors`}
            onClick={() => setIsLiked(!isLiked)}
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-6">
          <button 
            className={`pb-2 ${activeTab === 'about' ? 'text-white font-semibold border-b-2 border-[#00B087]' : 'text-gray-400'}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button 
            className={`pb-2 ${activeTab === 'financials' ? 'text-white font-semibold border-b-2 border-[#00B087]' : 'text-gray-400'}`}
            onClick={() => setActiveTab('financials')}
          >
            Financials
          </button>
        </div>

        {activeTab === 'about' ? (
          <div className="mb-8">
            {/* Stock Info */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <img 
                  src={stock.logo} 
                  alt={stock.name} 
                  className="w-16 h-16 rounded-lg"
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl font-bold">{stock.symbol}</h2>
                  <p className="text-gray-400">{stock.name}</p>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <h3 className="text-3xl sm:text-4xl font-bold">₦{stock.price}</h3>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-red-500">₦0.10</span>
                  <span className="text-red-500">0.39%</span>
                  <span className="text-gray-400">TODAY</span>
                </div>
                <div className="text-red-500 mt-1">● Market Closed</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base px-4 sm:px-0 mb-8">
              {stock.name} operates as a company in the Nigerian market. The company provides various services
              and products to its customers, maintaining a strong presence in the local business environment.
            </p>

            {/* Chart Section */}
            <div className="mb-8">
              
              <div className="w-full h-[200px] sm:h-[300px] bg-[#1E1E1E] rounded-lg ">
                <img 
                  src={chartImages[timeframe]}
                  alt="Stock Chart"
                  className="w-full h-full "
                />
              </div>
              <div className="flex gap-4 mb-4 overflow-x-auto scrollbar-hide">
                {Object.keys(chartImages).map((tf) => (
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
            </div>

            {/* Metrics */}
            <div className="mb-8">
              <StockMetrics price={stock.price} />
            </div>

            {/* Trading Buttons */}
            <div className="w-full">
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
        ) : (
          <div className="mb-8">
            {/* Financials Tab */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="bg-[#1E1E1E] p-4 rounded-lg">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {stock.name} operates as a company in the Nigerian market. The company provides various services
                  and products to its customers, maintaining a strong presence in the local business environment.
                </p>
              </div>
            </div>

            {/* Market Stats */}
            <div className="bg-[#1E1E1E] p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Market Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400 text-sm sm:text-base">High</span>
                  <span className="font-medium text-sm sm:text-base">{stats.high}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400 text-sm sm:text-base">Low</span>
                  <span className="font-medium text-sm sm:text-base">{stats.low}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400 text-sm sm:text-base">Avg Volume</span>
                  <span className="font-medium text-sm sm:text-base">{stats.avgVol}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400 text-sm sm:text-base">Market Cap</span>
                  <span className="font-medium text-sm sm:text-base">{stats.mktCap}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StockDetail;
