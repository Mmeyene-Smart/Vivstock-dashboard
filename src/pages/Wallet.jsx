import { useState, useEffect } from 'react';
import WalletHeader from '../components/wallet/WalletHeader';
import AssetBalance from '../components/wallet/AssetBalance';
// import TimeframeSelector from '../components/wallet/TimeframeSelector';
import AssetChart from '../components/wallet/AssetChart';
import { FaArrowRight, FaLock } from 'react-icons/fa';
// import TimeframeSelector from '../components/wallet/TimeframeSelector';
// import LastUpdate from '../components/wallet/LastUpdate';

function Wallet() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [balance, setBalance] = useState(1000); // Starting balance of $1000

  useEffect(() => {
    // Load balance from localStorage
    const savedBalance = localStorage.getItem('walletBalance');
    if (savedBalance) {
      setBalance(parseFloat(savedBalance));
    } else {
      localStorage.setItem('walletBalance', balance.toString());
    }
  }, []);

  return (
    <div className="px-4 py-6">
      <WalletHeader />
      <AssetBalance amount={balance.toFixed(2)}  btcAmount={(balance * 1000).toFixed(2)} />
      <AssetChart />
      {/* <TimeframeSelector /> */}
      {/* <LastUpdate timestamp={new Date().toISOString()} /> */}
      <div className="flex justify-center gap-4  absolute top-[472px] left-1 ">
        <button className="bg-[#1E1E1E] w-[110px] text-white py-2 px-4 rounded-full font-medium">
          Deposit
        </button>
        <button className="bg-[#1E1E1E] w-[110px] text-white py-2 px-4 rounded-full font-medium">
          Withdraw
        </button>
        {/* <button className="bg-[#1E1E1E] w-[110px] text-white py-2 px-4 rounded-full font-medium">
          Transfer
        </button> */}
      </div>
      <div className="border-b-[1px] border-[#636262] w-screen relative -left-4 top-[-50px]"></div>
      <div className="bg-[#1E1E1E] text-white py-2 px-4 rounded-[20px] h-[80px] font-semibold flex justify-between gap-[30px] mt-8 -top-[60px] relative my-[60px] text-center items-center align-middle">
        <div className="flex flex-col gap-[6px] items-center">
          <span className='opacity-[0.3] font-normal flex items-center'>
          <FaLock size={20} className="inline-block mr-2 text-[#bc14ff]" />
            Fixed
          </span> <span className='opacity-[0.7] '>${balance.toFixed(2)}</span>
        </div>
        <div className="text-center opacity-[0.3]"><FaArrowRight size={20}/></div>
      </div>
    </div>
  );
}

export default Wallet;