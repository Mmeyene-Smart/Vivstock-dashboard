import { useState } from 'react';
import WalletHeader from '../components/wallet/WalletHeader';
import AssetBalance from '../components/wallet/AssetBalance';
import TimeframeSelector from '../components/wallet/TimeframeSelector';
import AssetChart from '../components/wallet/AssetChart';
import LastUpdate from '../components/wallet/LastUpdate';

function Wallet() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');

  return (
    <div className="px-4 py-6">
      <WalletHeader />
      <AssetBalance amount="1.10" btcAmount="0.0000118" />
      <AssetChart />
      <TimeframeSelector
        selected={selectedTimeframe}
        onSelect={setSelectedTimeframe}
      />
      <LastUpdate timestamp="2024-12-24T04:10:00Z" />
      <div className="flex justify-center gap-4 mt-8 relative my-[60px] ">
        <button className="bg-[#1E1E1E] w-[110px] text-white py-2 px-4 rounded-full font-medium">
          Deposit
        </button>
        <button className="bg-[#1E1E1E] w-[110px] text-white py-2 px-4 rounded-full font-medium">
          Withdraw
        </button>
        <button className="bg-[#1E1E1E] w-[110px] text-white py-2 px-4 rounded-full font-medium">
          Transfer
        </button>
      </div>
    </div>
  );
}

export default Wallet;