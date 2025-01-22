import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';

function History() {
  const [activeTab, setActiveTab] = useState('deposits');
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    // Load trades from localStorage
    const savedTrades = JSON.parse(localStorage.getItem('trades') || '[]');
    setTrades(savedTrades);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="px-4 py-6">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-semibold">History</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-800">
        <button
          onClick={() => setActiveTab('deposits')}
          className={`pb-2 px-4 ${
            activeTab === 'deposits'
              ? 'text-purple-500 border-b-2 border-purple-500'
              : 'text-gray-400'
          }`}
        >
          Deposits
        </button>
        <button
          onClick={() => setActiveTab('withdrawals')}
          className={`pb-2 px-4 ${
            activeTab === 'withdrawals'
              ? 'text-purple-500 border-b-2 border-purple-500'
              : 'text-gray-400'
          }`}
        >
          Withdrawals
        </button>
        <button
          onClick={() => setActiveTab('trade')}
          className={`pb-2 px-4 ${
            activeTab === 'trade'
              ? 'text-purple-500 border-b-2 border-purple-500'
              : 'text-gray-400'
          }`}
        >
          Trade
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {activeTab === 'deposits' && (
          <div className="text-center text-gray-400 py-8 relative top-[190px] flex flex-col">
            <svg className='relative left-[41.5%]' width="64px" height="64px" viewBox="0 0 312 312" xmlns="http://www.w3.org/2000/svg" fill="#ae00d1" stroke="#ae00d1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="empty_inbox" data-name="empty inbox" transform="translate(-2956.982 -3048.416)"> <path id="Path_26" data-name="Path 26" d="M3268.982,3078.286a29.869,29.869,0,0,0-29.869-29.87H2986.851a29.869,29.869,0,0,0-29.869,29.87v252.259a29.87,29.87,0,0,0,29.869,29.871h252.262a29.87,29.87,0,0,0,29.869-29.871Zm-281.9-4.87H3239.3a5.378,5.378,0,0,1,5.684,5.268v141.732h-73.54a12.038,12.038,0,0,0-12.114,12.025,47.854,47.854,0,0,1-95.668,1.918,11.273,11.273,0,0,0,.162-1.906,12.049,12.049,0,0,0-12.116-12.037h-70.724V3078.684C2980.982,3075.574,2983.97,3073.416,2987.08,3073.416Zm252.218,263H2987.08c-3.11,0-6.1-2.4-6.1-5.514v-86.486h59.426a72.092,72.092,0,0,0,142.13,0h62.444V3330.9A5.577,5.577,0,0,1,3239.3,3336.416Z" fill="#5f00ad"></path> </g> </g></svg>
            No History
          </div>
        )}

        {activeTab === 'withdrawals' && (
          <div className="text-center text-gray-400 py-8 relative top-[190px] flex flex-col">
            <svg className='relative left-[41.5%]' width="64px" height="64px" viewBox="0 0 312 312" xmlns="http://www.w3.org/2000/svg" fill="#ae00d1" stroke="#ae00d1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="empty_inbox" data-name="empty inbox" transform="translate(-2956.982 -3048.416)"> <path id="Path_26" data-name="Path 26" d="M3268.982,3078.286a29.869,29.869,0,0,0-29.869-29.87H2986.851a29.869,29.869,0,0,0-29.869,29.87v252.259a29.87,29.87,0,0,0,29.869,29.871h252.262a29.87,29.87,0,0,0,29.869-29.871Zm-281.9-4.87H3239.3a5.378,5.378,0,0,1,5.684,5.268v141.732h-73.54a12.038,12.038,0,0,0-12.114,12.025,47.854,47.854,0,0,1-95.668,1.918,11.273,11.273,0,0,0,.162-1.906,12.049,12.049,0,0,0-12.116-12.037h-70.724V3078.684C2980.982,3075.574,2983.97,3073.416,2987.08,3073.416Zm252.218,263H2987.08c-3.11,0-6.1-2.4-6.1-5.514v-86.486h59.426a72.092,72.092,0,0,0,142.13,0h62.444V3330.9A5.577,5.577,0,0,1,3239.3,3336.416Z" fill="#5f00ad"></path> </g> </g></svg>
            No History
          </div>
        )}

        {activeTab === 'trade' && (
          <div>
            {trades.length === 0 ? (
              <div className="text-center text-gray-400 py-8 relative top-[190px] flex flex-col">
                <svg className='relative left-[41.8%]' width="64px" height="64px" viewBox="0 0 312 312" xmlns="http://www.w3.org/2000/svg" fill="#ae00d1" stroke="#ae00d1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="empty_inbox" data-name="empty inbox" transform="translate(-2956.982 -3048.416)"> <path id="Path_26" data-name="Path 26" d="M3268.982,3078.286a29.869,29.869,0,0,0-29.869-29.87H2986.851a29.869,29.869,0,0,0-29.869,29.87v252.259a29.87,29.87,0,0,0,29.869,29.871h252.262a29.87,29.87,0,0,0,29.869-29.871Zm-281.9-4.87H3239.3a5.378,5.378,0,0,1,5.684,5.268v141.732h-73.54a12.038,12.038,0,0,0-12.114,12.025,47.854,47.854,0,0,1-95.668,1.918,11.273,11.273,0,0,0,.162-1.906,12.049,12.049,0,0,0-12.116-12.037h-70.724V3078.684C2980.982,3075.574,2983.97,3073.416,2987.08,3073.416Zm252.218,263H2987.08c-3.11,0-6.1-2.4-6.1-5.514v-86.486h59.426a72.092,72.092,0,0,0,142.13,0h62.444V3330.9A5.577,5.577,0,0,1,3239.3,3336.416Z" fill="#5f00ad"></path> </g> </g></svg>
                No History
              </div>
            ) : (
              <div className="space-y-4">
                {trades.map((trade, index) => (
                  <div
                    key={index}
                    className="bg-[#1A1A1A] rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold">{trade.name}</span>
                          <span className={`text-sm px-2 py-1 rounded ${
                            trade.type === 'buy' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                          }`}>
                            {trade.type.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{trade.symbol}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${trade.type === 'buy' ? 'text-red-500' : 'text-green-500'}`}>
                          {trade.type === 'buy' ? '-' : '+'}{formatCurrency(trade.price)}
                        </p>
                        <p className="text-sm text-gray-400">
                          Balance: {formatCurrency(trade.balanceAfter)}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {new Date(trade.timestamp).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default History;