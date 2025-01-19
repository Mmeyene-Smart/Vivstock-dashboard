import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoArrowBack, IoClose, IoSearch } from 'react-icons/io5';
import { IoMdSwap } from 'react-icons/io';
import { stockData } from '../data/stockData';

function StockList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStocks = stockData.filter(stock => 
    stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleStockClick = (symbol) => {
    navigate(`/trade/${symbol}`);
  };

  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <IoArrowBack size={24} onClick={() => navigate(-1)} className="cursor-pointer" />
          <h1 className="text-xl font-semibold text-center">Search Stocks</h1>
        </div>
      </div>

      <div className="relative mb-8">
        <div className="flex items-center bg-app-gray px-4 py-3 rounded-[20px] border border-gray-400">
          <IoSearch size={24} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search Local stocks"
            className="flex-1 bg-transparent outline-none "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <IoClose 
              size={24} 
              className="text-gray-400 cursor-pointer" 
              onClick={clearSearch}
            />
          )}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex w-[200px] h-[45px] items-center gap-2 mb-4 border-b border-t border-gray-800 pb-2">
          <h2 className="text-xl font-semibold">Featured Stocks</h2>
          <IoMdSwap className="text-[#7d26cd]" size={24} />
        </div>

        <div className="space-y-1">
          {filteredStocks.map((stock) => (
            <div
              key={stock.symbol}
              className="flex items-center justify-between cursor-pointer hover:bg-[#1E1E1E] p-2 transition-colors border-b border-gray-700"
              onClick={() => handleStockClick(stock.symbol)}
            >
              <div className="flex items-center gap-3 w-full h-[40px] text-[13px]">
                <img
                  src={stock.logo}
                  alt={stock.name}
                  className="w-8 h-8 rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-[20px]">{stock.name}</h3>
                  <p className="text-gray-400 text-[11px]">{stock.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-[15px]">${stock.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StockList;
