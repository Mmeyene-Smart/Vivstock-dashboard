import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletHeader from '../components/wallet/WalletHeader';
import AssetBalance from '../components/wallet/AssetBalance';
// import TimeframeSelector from '../components/wallet/TimeframeSelector';
import AssetChart from '../components/wallet/AssetChart';
import { FaArrowRight, FaLock } from 'react-icons/fa';
import Fixed from './Fixed';
// import TimeframeSelector from '../components/wallet/TimeframeSelector';
// import LastUpdate from '../components/wallet/LastUpdate';

function Wallet() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [balance, setBalance] = useState(1000); // Starting balance of $1000
  const navigate = useNavigate();

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
      <div className="flex justify-center gap-[90px] left-[10px] absolute top-[472px]  items-center ">
        <button className="bg-[#1E1E1E] w-[120px] text-white py-2 px-4 rounded-[10px] font-medium flex relative left-[45px] gap-[6px]">
        <svg className='relative top-[5px]' xmlns="http://www.w3.org/2000/svg" fill="#7626cd" width="15px" height="15px" viewBox="0 0 24.00 24.00" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)" stroke="#7626cd" stroke-width="0.12000000000000002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.6 21H4.4C3.1 21 2 19.9 2 18.6V14h2v4.2c0 .6.4.8 1 .8h14c.6 0 1-.4 1-1v-4h2v4.6c0 1.3-1.1 2.4-2.4 2.4z"></path><path d="M15.3 12.1L13.4 14v-4c0-2 0-4.9 2.4-7-3.4.6-5.1 3.2-5.2 7v4l-1.9-1.9L7 13l5 5 5-5-1.7-.9z"></path></g></svg>
          Deposit
        </button>
        <button className="bg-[#1E1E1E] w-[125px] relative left-[10px] text-white py-2 px-4 rounded-[10px] flex font-medium gap-[4px] items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#7d26cd" width="15px" height="15px" viewBox="0 0 24 24" transform="matrix(-1, 0, 0, -1, 0, 0)" stroke="#7d26cd" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"><path d="M19.6 21H4.4C3.1 21 2 19.9 2 18.6V14h2v4.2c0 .6.4.8 1 .8h14c.6 0 1-.4 1-1v-4h2v4.6c0 1.3-1.1 2.4-2.4 2.4z"></path><path d="M15.3 12.1L13.4 14v-4c0-2 0-4.9 2.4-7-3.4.6-5.1 3.2-5.2 7v4l-1.9-1.9L7 13l5 5 5-5-1.7-.9z"></path></g></svg>
          Withdraw
        </button>
        {/* <button className="bg-[#1E1E1E] w-[110px] text-white py-2 px-4 rounded-full font-medium">
          Transfer
        </button> */}
      </div>
      <div className="border-b-[1px] border-[#636262] w-screen relative -left-4 top-[-50px]"></div>
      <div className="bg-[#1E1E1E] text-white py-2 px-4 rounded-[20px] h-[80px] font-semibold flex justify-between gap-[30px] mt-8 -top-[60px] relative my-[60px] text-center items-center align-middle" onClick={() => navigate('/fixed')}>
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