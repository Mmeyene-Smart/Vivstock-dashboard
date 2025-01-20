import { useState } from 'react';
import WalletHeader from '../components/wallet/WalletHeader';
import AssetBalance from '../components/wallet/AssetBalance';
import TimeframeSelector from '../components/wallet/TimeframeSelector';
import AssetChart from '../components/wallet/AssetChart';
import LastUpdate from '../components/wallet/LastUpdate';

function Wallet() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [tooltipContent, setTooltipContent] = useState('');

  const handleChartHover = (balance) => {
    setTooltipContent(`Balance: ${balance}`);
  };

  return (
    <div className="px-4 py-6">
      <WalletHeader />
      <AssetBalance amount="1.10" btcAmount="0.0000118" />
      <div className="relative">
        <AssetChart timeframe={selectedTimeframe} onHover={handleChartHover} />
      </div>
      <TimeframeSelector
        selected={selectedTimeframe}
        onSelect={setSelectedTimeframe}
      />
      <LastUpdate timestamp="2024-12-24T04:10:00Z" />
      <div className="flex justify-center gap-4 mt-8 relative my-[60px] ">
        <button className="bg-[#1E1E1E] w-[110px] text-white py-2 px-4 rounded-full font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#7626cd" width="15px" height="15px" viewBox="0 0 24.00 24.00" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)" stroke="#7626cd" stroke-width="0.12000000000000002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.6 21H4.4C3.1 21 2 19.9 2 18.6V14h2v4.2c0 .6.4.8 1 .8h14c.6 0 1-.4 1-1v-4h2v4.6c0 1.3-1.1 2.4-2.4 2.4z"></path><path d="M15.3 12.1L13.4 14v-4c0-2 0-4.9 2.4-7-3.4.6-5.1 3.2-5.2 7v4l-1.9-1.9L7 13l5 5 5-5-1.7-.9z"></path></g></svg>
          Deposit
        </button>
        <button className="bg-[#1E1E1E] w-[110px] text-white py-2 px-4 rounded-full font-medium">
          
          Withdraw
        </button>
        <button className="bg-[#1E1E1E] w-[110px] text-white py-2 px-4 rounded-full font-medium">

        <svg xmlns="http://www.w3.org/2000/svg" fill="#7d26cd" width="15px" height="15px" viewBox="0 0 24 24" stroke="#7d26cd" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"><path d="M3.8 9.2c0-.9 1-2.6 2.3-3.1s3.3-.5 6-.5c2.9 0 5.8.5 5.8.5l-2.3-2.3 1-1.9L22 7.4l-5.5 5.5-1-1.9 2.3-2.3s-2.9-.5-5.9-.5c-2.6 0-4.6 0-5.9.5s-2.2 3.7-2.2 3.7V9.2z"></path><path d="M20.2 14.8c0 .9-1 2.6-2.3 3.1s-3.3.5-6 .5c-2.9 0-5.8-.5-5.8-.5l2.3 2.3-1 1.9L2 16.6l5.5-5.5 1 1.9-2.3 2.3s2.9.5 5.9.5c2.6 0 4.6 0 5.9-.5s2.2-3.7 2.2-3.7v3.2z"></path></g></svg>
          Transfer
        </button>
      </div>
    </div>
  );
}

export default Wallet;
