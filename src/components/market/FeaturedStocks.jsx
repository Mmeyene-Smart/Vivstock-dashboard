import { IoMdSwap } from 'react-icons/io';
import StockCard from './StockCard';

function FeaturedStocks({ stocks, onStockClick }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Featured Stocks</h2>
        <IoMdSwap className="text-[#00B087]" size={24} />
      </div>
      <div className="space-y-4">
        {stocks.map((stock) => (
          <StockCard
            key={stock.symbol}
            stock={stock}
            onClick={() => onStockClick(stock.symbol)}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedStocks;