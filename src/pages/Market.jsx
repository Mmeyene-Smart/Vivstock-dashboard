
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
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-[#1E1E1E] rounded-full transition-colors"
        >
          <IoArrowBack size={24} />
        </button>
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
          Naira only
        </button>
      </div>

      <div className="bg-black p-4 rounded-lg mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Low-risk assets mix</h3>
            <p className="text-gray-600">268.47% USD* • 8 years</p>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-6">All Assets Offerings</h2>
      
      <div className="grid grid-cols-2 gap-1">
        <div 
          className="bg-black p-6 rounded-lg cursor-pointer"
          onClick={() => handleAssetClick('usd')}
        >
          <div className="w-20 h-16 mb-4">
            <div className="w-full h-full bg-green-100 rounded-lg"></div>
          </div>
          <h3 className="text-lg font-bold text-white">Foriegn Stocks</h3>
          <p className="text-gray-600">Buy Foriegn Companies</p>
        </div>

        <div 
          className="bg-black p-6 rounded-lg cursor-pointer"
          onClick={() => handleAssetClick('ngn')}
        >
          <div className="w-16 h-16 mb-4">
            <div className="w-full h-full bg-green-100 rounded-lg"></div>
          </div>
          <h3 className="text-lg font-bold text-white">Local Stocks</h3>
          <p className="text-gray-600">Buy local companies</p>
        </div>
      </div>
    </div>
  );
}

export default Market;
