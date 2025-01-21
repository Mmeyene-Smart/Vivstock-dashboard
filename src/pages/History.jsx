import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';

function History() {
  const [activeTab, setActiveTab] = useState('trade');
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
        <h1 className="text-2xl font-bold">History</h1>
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
          <div className="text-center text-gray-400 py-8">
            No deposits Made
          </div>
        )}

        {activeTab === 'withdrawals' && (
          <div className="text-center text-gray-400 py-8">
            No withdrawals Made
          </div>
        )}

        {activeTab === 'trade' && (
          <div>
            {trades.length === 0 ? (
              <div className="text-center text-gray-400 py-8">
                No Available trades 
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