import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { FaCopy } from 'react-icons/fa';

function TradingCard() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="rounded-lg p-6 mb-8 relative left-[-25px]">
      <div className="mb-2">
      <div className="text-[10px] text-white">Profit Balance </div>
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-2xl">$</span>
          <span className="text-3xl relative left-[-8px] font-bold">
            {showBalance ? '0.00' : '****'}
          </span> <button 
          onClick={() => setShowBalance(!showBalance)}
          className="text-gray-400 hover:text-white relative left-[-10px] transition-colors"
        >
          {showBalance ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
        </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-[12px]">8060011502  </span>
        <FaCopy 
          size= {10} />
       
      </div>
    </div>
  );
}

export default TradingCard;