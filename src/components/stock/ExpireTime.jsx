function ExpireTime() {
  return (
    <div className="h-[200px]">
      <div className="bg-app-gray rounded-lg p-4 mt-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-sm">Expire Time</span>
          <div className="flex items-center gap-2">
            <select disabled className="bg-transparent text-white border-none outline-none appearance-none text-sm cursor-not-allowed opacity-75">
              <option value="30">30 minutes</option>
            </select>
            <span className="text-gray-400 text-sm">Mins/hrs</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 mt-4 absolute top-[30px]">
        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          Buy
        </button>
        <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          Sell
        </button>
      </div>
    </div>
  );
}

export default ExpireTime;