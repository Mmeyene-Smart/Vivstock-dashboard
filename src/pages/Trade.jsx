import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Trade() {
  const [trades, setTrades] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTrades = JSON.parse(localStorage.getItem('trades') || '[]');
    setTrades(savedTrades);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const handleStockClick = (symbol) => {
    navigate(`/trade/${symbol}`);
  };

  // Group trades by symbol
  const groupedTrades = trades.reduce((acc, trade) => {
    if (!acc[trade.symbol]) {
      acc[trade.symbol] = {
        symbol: trade.symbol,
        name: trade.name,
        quantity: 0,
        totalValue: 0,
        lastPrice: parseFloat(trade.price),
        trades: []
      };
    }
    
    acc[trade.symbol].quantity += trade.type === 'buy' ? 1 : -1;
    acc[trade.symbol].totalValue += trade.type === 'buy' ? parseFloat(trade.price) : -parseFloat(trade.price);
    acc[trade.symbol].trades.push(trade);
    
    return acc;
  }, {});

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">Trades</h1>
      
      <div className="space-y-4">
        {Object.values(groupedTrades).map((stock) => (
          stock.quantity > 0 && (
            <div
              key={stock.symbol}
              className="bg-[#1A1A1A] rounded-lg p-4 cursor-pointer"
              onClick={() => handleStockClick(stock.symbol)}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{stock.name}</h3>
                  <p className="text-sm text-gray-400">{stock.symbol}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{formatCurrency(stock.lastPrice)}</p>
                  <p className="text-sm text-gray-400">
                    Qty: {stock.quantity}
                  </p>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Value:</span>
                <span className="font-medium">
                  {formatCurrency(stock.quantity * stock.lastPrice)}
                </span>
              </div>
            </div>
          )
        ))}
        
        {Object.values(groupedTrades).every(stock => stock.quantity <= 0) && (
          <div className="text-center absolute top-[35%] left-[40%] text-gray-400 py-8">
            <p>No History</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Trade;