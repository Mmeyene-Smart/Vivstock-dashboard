function ExpireTime() {
  return (
    <div className="h-[100px] relative top-[-10px] font-semibold">
      <div className="bg-transparent p-2">
        <div className="flex items-center justify-around">
          <span className="text-white text-sm normal relative left-[-15px]">Expire Time</span>
          <div className="flex items-center gap-2">
            <select disabled className="bg-transparent text-white border-none outline-none appearance-none text-sm cursor-not-allowed opacity-75">
              <option value="30">30 minutes</option>
            </select>
            <span className="text-white text-sm">Mins/hrs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpireTime;