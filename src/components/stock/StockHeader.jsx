import { IoArrowBack } from 'react-icons/io5';
import { IoMdHeart } from 'react-icons/io';

function StockHeader({ symbol, name, onBack }) {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-[#1E1E1E] rounded-full transition-colors"
        >
          <IoArrowBack size={24} />
        </button>
        <IoMdHeart size={24} className="text-white" />
      </div>

      <div className="text-center relative top-[-65px] mb-8">
        <h1 className="text-2xl font-bold mb-1">{symbol}</h1>
        <p className="text-gray-400">{name}</p>
      </div>
    </>
  );
}

export default StockHeader;