import { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

function AssetBalance({ amount, btcAmount }) {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalance = () => setShowBalance(!showBalance);

  const hiddenValue = '****';

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-2 text-gray-400">
        <span>Total Assets</span>
        {showBalance ? (
          <IoEyeOutline size={18} className="cursor-pointer" onClick={toggleBalance} />
        ) : (
          <IoEyeOffOutline size={18} className="cursor-pointer" onClick={toggleBalance} />
        )}
      </div>
      <div className="flex items-baseline gap-2">
        <h2 className="text-2xl font-bold">
          {showBalance ? amount : hiddenValue}
        </h2>
        <span className="text-xl text-gray-400">USD</span>
      </div>
      <p className="text-sm text-gray-400 mt-2">
        ≈ {showBalance ? btcAmount : hiddenValue} NGN
      </p>
    </div>
  );
}

export default AssetBalance;