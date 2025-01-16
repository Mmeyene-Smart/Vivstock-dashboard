import { useRef } from 'react';
import Slider from 'react-slick';
import { stockData } from '../../data/stockData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function StockItem({ stock, change }) {
  const isPositive = change > 0;
  
  return (
    <div className="bg-[#1E1E1E] rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={stock.logo} alt={stock.name} className="w-10 h-10 rounded-full" />
        <div>
          <h4 className="font-semibold">{stock.symbol}</h4>
          <p className="text-sm text-gray-400 truncate max-w-[120px]">{stock.name}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">${stock.price}</p>
        <p className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{change}%
        </p>
      </div>
    </div>
  );
}

function PopularStocks() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    vertical: false,
    adaptiveHeight: false,
    centerMode: false,
    variableWidth: false,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const stocksWithChanges = stockData.map((stock, index) => ({
    stock,
    change: index % 2 === 0 ? -3.46 : 30.46
  }));

  return (
    <div id="popular-stocks-section" className="mb-8 overflow-hidden">
      <h3 className="text-xl font-semibold mb-4">Popular Stocks</h3>
      <div className="w-full">
        <div className="slick-container">
          <Slider ref={sliderRef} {...settings}>
            {stocksWithChanges.map(({ stock, change }) => (
              <div key={stock.symbol} className="px-1">
                <StockItem stock={stock} change={change} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default PopularStocks;