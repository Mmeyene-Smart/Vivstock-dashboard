import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { stockData } from '../data/stockData';

function Market() {
  const navigate = useNavigate();
  const [selectedCurrency, setSelectedCurrency] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStocks = stockData.filter(stock => {
    const matchesSearch = stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stock.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedCurrency === 'all') return matchesSearch;
    return matchesSearch && (selectedCurrency === 'usd' ? stock.isUSD : !stock.isUSD);
  });

  const handleAssetClick = (currency) => {
    setSelectedCurrency(currency);
    navigate('/market/stocks');
  };

  return (
    <div className="px-4 py-6">
      <div className="flex items-center gap-4 mb-6">
        {/* <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-[#1E1E1E] rounded-full transition-colors"
        >
          <IoArrowBack size={24} />
        </button> */}
        <h1 className="text-2xl font-bold">Assets</h1>
      </div>

      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setSelectedCurrency('all')}
          className={`px-4 py-2 rounded-full ${
            selectedCurrency === 'all' 
              ? 'bg-black text-white' 
              : 'bg-[#E8F3F1] text-black'
          } text-base sm:text-lg md:text-xl`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCurrency('usd')}
          className={`px-4 py-2 rounded-full ${
            selectedCurrency === 'usd'
              ? 'bg-black text-white'
              : 'bg-[#E8F3F1] text-black'
          } text-base sm:text-lg md:text-xl`}
        >
          USD only
        </button>
        <button
          onClick={() => setSelectedCurrency('ngn')}
          className={`px-4 py-2 rounded-full ${
            selectedCurrency === 'ngn'
              ? 'bg-black text-white'
              : 'bg-[#E8F3F1] text-black'
          } text-base sm:text-lg md:text-xl`}
        >
          Local only
        </button>
      </div>

      <div className="bg-black p-4 rounded-lg mb-8 " >
        <div className="flex items-center gap-3" onClick={()=>navigate('/refer')}>
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
            <img src="/refer-friend-concept-illustration-b.png" alt="" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Refer A Friend To Vivstock</h3>
            <p className="text-gray-600">Get 5% Interest On Thier First Deposit</p>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-6">All Assets Offerings</h2>
      
      <div className="grid grid-cols-2 gap-1 w-full">
        {(selectedCurrency === 'all' || selectedCurrency === 'usd') && (
          <div 
            className="bg-black p-6 rounded-lg cursor-pointer w-full"
            onClick={() => handleAssetClick('usd')}
          >
            <div className="w-24 h-12 mb-4">
              <div className="w-full h-fullrounded-lg relative top-[-20px]"><img src="/vivstock_20250121_065809_0003.png" alt="" /></div>
            </div>
            <h3 className="text-[17px] font-bold relative top-5 text-white w-full">Foreign Stocks</h3>
            <p className="text-white text-[12px] sm:text-[12px] relative top-5 w-full">Buy Foreign Companies</p>
          </div>
        )}

        {(selectedCurrency === 'all' || selectedCurrency === 'ngn') && (
          <div 
            className="bg-black p-6 rounded-lg cursor-pointer w-full"
            onClick={() => handleAssetClick('ngn')}
          >
            <div className="w-24 h-16 mb-4">
              <div className="w-full h-full relative top-[-20px] rounded-lg"><img src="/vivstock_20250121_065810_0005.png" alt="" /></div>
            </div>
            <h3 className="text-lg font-bold   w-full">Local Stocks</h3>
            <p className="text-white text-[12px] mb-5 sm:text-[12px] w-full">Buy local companies</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Market;
