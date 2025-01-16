import { useNavigate } from 'react-router-dom';

function StockCard({ stock, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trade/${stock.symbol}`);
  };

  return (
    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center gap-3">
        <img
          src={stock.logo}
          alt={stock.name}
          className="w-12 h-12 rounded-lg"
        />
        <div>
          <h3 className="font-semibold">{stock.name}</h3>
          <p className="text-gray-400 text-sm">{stock.symbol}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">₦{stock.price}</p>
      </div>
    </div>
  );
}

export default StockCard;