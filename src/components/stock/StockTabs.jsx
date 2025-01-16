import { useState } from 'react';

function StockTabs() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="flex gap-6 mb-6">
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
  );
}

export default StockTabs;