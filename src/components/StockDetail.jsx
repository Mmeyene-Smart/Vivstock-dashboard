import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { stockData } from "../data/stockData";
import StockMetrics from "./stock/StockMetrics";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  firstMonth,
  firstYear,
  firstWeek,
  threeMonth,
  threeYear,
} from "./chartArray";

function StockDetail() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");
  const [isLiked, setIsLiked] = useState(false);
  const [timeframe, setTimeframe] = useState("7d");
  const stock = stockData.find((s) => s.symbol === symbol);
  const [stockChart, setStockChart] = useState("7d"); // Default to "7d" on page load

  const toggleChart = (chart) => {
    setStockChart(chart);
  };

  if (!stock) return null;

  const stats = {
    open: "₦25.95",
    high: "₦26.95",
    low: "₦22.55",
    volume: "0.00",
    avgVol: "---",
    mktCap: "---",
  };

  const monthData = [{}];

  const handleTrade = (type) => {
    console.log(`${type} order`);
  };

  return (
    <div className="min-h-screen max-w-2xl h-[200px] mx-auto font-['DM Sans'] px-4 sm:px-6 lg:px-8">
      <div className="py-4 sm:py-6">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-[#1E1E1E] rounded-full transition-colors"
          >
            <IoArrowBack size={24} />
          </button>
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-bold mb-1">{stock.symbol}</h1>
            <p className="text-gray-400 text-sm">{stock.name}</p>
          </div>
          <IoMdHeart
            size={24}
            className={`${
              isLiked ? "text-purple-500" : "text-white"
            } cursor-pointer transition-colors`}
            onClick={() => setIsLiked(!isLiked)}
          />
        </div>

        {/* Stock Name and Symbol */}
        <div className="text-center mb-4">
          {/* Removed the stock name and symbol from here */}
        </div>

        {/* Tabs */}
        <div className="flex justify-between mb-8">
          <button
            className={`flex-1 pb-2 text-lg ${
              activeTab === "about"
                ? "text-white font-semibold active:bg-green-900"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            className={`flex-1 pb-2 text-lg ${
              activeTab === "financials"
                ? "text-white font-semibold active:bg-green-900"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("financials")}
          >
            Financials
          </button>
        </div>

        {activeTab === "about" ? (
          <div className="mb-8">
            {/* Stock Info */}
            <div className="flex items-center gap-4 justify-start ml-2 mb-6">
              <img
                src={stock.logo || "https://example.com/placeholder.png"}
                alt={stock.name}
                className="w-[38px] h-[38px] rounded-lg bg-white  relative top-[-10px]"
              />
              <div className="text-left">
                <h2 className="text-2xl font-bold mb-1">₦{stock.price}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-red-500 text-xs">₦0.10</span>
                  <span className="text-red-500 text-xs">0.39%</span>
                  <span className="text-gray-500 text-xs">TODAY</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="text-red-500 text-xs">Market Closed</span>
                </div>
              </div>
            </div>

            {/* Description */}

            <h2 className="text-xl font-bold mb-4 relative left-3">About {stock.name}</h2>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base px-4 sm:px-0 mb-8">
              {stock.name} operates as a company in the Nigerian market. The
              company provides various services and products to its customers,
              maintaining a strong presence in the local business environment.
            </p>

            {/* Chart Section */}
            <div className="mb-8">
              <div className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] ">
                <ResponsiveContainer width="100%" height="100%">
                  {stockChart === "7d" && (
                    <LineChart data={firstWeek}>
                      <Line
                        type="linear"
                        dataKey="uv"
                        stroke="purple"
                        strokeWidth={1}
                        dot={false}
                      />
                      <Tooltip
                        contentStyle={{ display: "none" }} // Hides the tooltip box
                        cursor={{ stroke: "white", strokeWidth: 1 }}
                      />
                    </LineChart>
                  )}
                  {stockChart === "1m" && (
                    <LineChart data={firstMonth}>
                      <Line
                        type="linear"
                        dataKey="uv"
                        stroke="purple"
                        strokeWidth={1}
                        dot={false}
                      />
                      <Tooltip
                        contentStyle={{ display: "none" }} // Hides the tooltip box
                        cursor={{ stroke: "white", strokeWidth: 1 }}
                      />
                    </LineChart>
                  )}
                  {stockChart === "3m" && (
                    <LineChart data={threeMonth}>
                      <Line
                        type="linear"
                        dataKey="uv"
                        stroke="purple"
                        strokeWidth={1}
                        dot={false}
                      />
                      <Tooltip
                        contentStyle={{ display: "none" }} // Hides the tooltip box
                        cursor={{ stroke: "white", strokeWidth: 1 }}
                      />
                    </LineChart>
                  )}
                  {stockChart === "1y" && (
                    <LineChart data={firstYear}>
                      <Line
                        type="linear"
                        dataKey="uv"
                        stroke="purple"
                        strokeWidth={1}
                        dot={false}
                      />
                      <Tooltip
                        contentStyle={{ display: "none" }} // Hides the tooltip box
                        cursor={{ stroke: "white", strokeWidth: 1 }}
                      />
                    </LineChart>
                  )}
                  {stockChart === "3y" && (
                    <LineChart data={threeYear}>
                      <Line
                        type="linear"
                        dataKey="uv"
                        stroke="purple"
                        strokeWidth={1}
                        dot={false}
                      />
                      <Tooltip
                        contentStyle={{ display: "none" }} // Hides the tooltip box
                        cursor={{ stroke: "white", strokeWidth: 1 }}
                      />
                    </LineChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex md:justify-center justify-between space-x-4 mb-4">
              {/* Buttons for toggling charts */}
              <button
                className={`px-4 py-2 rounded ${
                  stockChart === "7d" ? "text-purple-600 " : " text-gray-300 "
                }`}
                onClick={() => toggleChart("7d")}
              >
                1W
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  stockChart === "1m" ? "text-purple-600 " : " text-gray-300 "
                }`}
                onClick={() => toggleChart("1m")}
              >
                1M
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  stockChart === "3m" ? "text-purple-600 " : " text-gray-300 "
                }`}
                onClick={() => toggleChart("3m")}
              >
                3M
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  stockChart === "1y" ? "text-purple-600 " : " text-gray-300 "
                }`}
                onClick={() => toggleChart("1y")}
              >
                1Y
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  stockChart === "3y" ? "text-purple-600 " : " text-gray-300 "
                }`}
                onClick={() => toggleChart("3y")}
              >
                3Y
              </button>
            </div>

            {/* Metrics */}
            <div className="mb-8">
              <StockMetrics price={stock.price} />
            </div>

            {/* Trading Buttons */}
            <div className="w-full relative top-[-100px]">
              <div className="flex gap-4">
                <button
                  onClick={() => handleTrade("buy")}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
                >
                  Buy
                </button>
                <button
                  onClick={() => handleTrade("sell")}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
                >
                  Sell
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-8">
            {/* Financials Tab */}
            <div className="flex items-center gap-4 justify-start ml-2 mb-6">
                <img 
                src={stock.logo || "https://example.com/placeholder.png"}
                alt={stock.name}
                className="w-[38px] h-[38px] rounded-lg bg-white relative top-[-10px]"
              />
              <div className="text-left">
                <h2 className="text-2xl font-bold mb-1">₦{stock.price}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-red-500 text-xs">₦0.10</span>
                  <span className="text-red-500 text-xs">0.39%</span>
                  <span className="text-gray-500 text-xs">TODAY</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="text-red-500 text-xs">Market Closed</span>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-4 relative left-3">About {stock.name}</h2>

            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="bg-transparent p-4 rounded-lg">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {stock.name} operates as a company in the Nigerian market. The
                  company provides various services and products to its
                  customers, maintaining a strong presence in the local business
                  environment.
                </p>
              </div>
            </div>

            {/* Market Stats */}
            <div className="bg-transparent p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Market Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400 text-sm sm:text-base">
                    High
                  </span>
                  <span className="font-medium text-sm sm:text-base">
                    {stats.high}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400 text-sm sm:text-base">
                    Low
                  </span>
                  <span className="font-medium text-sm sm:text-base">
                    {stats.low}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400 text-sm sm:text-base">
                    Avg Volume
                  </span>
                  <span className="font-medium text-sm sm:text-base">
                    {stats.avgVol}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400 text-sm sm:text-base">
                    Market Cap
                  </span>
                  <span className="font-medium text-sm sm:text-base">
                    {stats.mktCap}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-4">
                <button
                  onClick={() => handleTrade("buy")}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
                >
                  Buy
                </button>
                <button
                  onClick={() => handleTrade("sell")}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
                >
                  Sell
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StockDetail;