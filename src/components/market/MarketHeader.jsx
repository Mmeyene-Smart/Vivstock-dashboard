import { IoArrowBack } from 'react-icons/io5';

function MarketHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <IoArrowBack size={24} />
        <h1 className="text-xl font-semibold">Search Stocks</h1>
      </div>
    </div>
  );
}

export default MarketHeader;