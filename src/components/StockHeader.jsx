import { IoArrowBack } from 'react-icons/io5';
import { IoMdHeart } from 'react-icons/io';

function StockHeader({ symbol, name, onBack }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <button 
        onClick={onBack}
        className="p-2 hover:bg-[#1E1E1E] rounded-full transition-colors"
      >
        <IoArrowBack size={24} />
      </button>
      <h1 className="text-lg font-bold">{symbol}</h1>
      <IoMdHeart size={24} className="text-white" />
    </div>
  );
}

export default StockHeader;
