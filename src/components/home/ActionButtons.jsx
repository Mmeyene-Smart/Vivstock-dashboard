import { useState, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaWallet } from 'react-icons/fa';
import { RiBankCardFill } from 'react-icons/ri';
import { FaExchangeAlt } from 'react-icons/fa';

function ReferralModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1E1E1E] rounded-lg p-6 w-[90%] max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <IoClose size={24} />
        </button>
        <h2 className="text-xl font-bold mb-4">Share Referral Link</h2>
        <div className="bg-[#111111] p-4 rounded-lg mb-4">
          <p className="text-gray-400 break-all">https://Vivstocks.com/ref/hopeubong2430</p>
        </div>
      </div>
    </div>
  );
}

function ActionButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showReferralButton, setShowReferralButton] = useState(true);
  const [hasTimedOut, setHasTimedOut] = useState(false);
  const popularStocksRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Start the 10-second timer
    timeoutRef.current = setTimeout(() => {
      setHasTimedOut(true);
      setShowReferralButton(false);
    },100000);

    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        // Only hide based on scroll if the timer hasn't expired
        if (!hasTimedOut) {
          const [entry] = entries;
          setShowReferralButton(!entry.isIntersecting);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    // Start observing the popular stocks section
    const popularStocksElement = document.querySelector('#popular-stocks-section');
    if (popularStocksElement) {
      observer.observe(popularStocksElement);
    }

    return () => {
      // Cleanup
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      observer.disconnect();
    };
  }, [hasTimedOut]);

  return (
    <>
      <div>
        <div className="flex justify-start gap-7 mb-8 mt-[-27px] pl-6 pr-4">
          <button className="bg-[#1E1E1E] w-[110px] top-[-10px] relative text-2l text-white py-2 px-[10px] rounded-full font-[syne] font-light flex items-center left-[-30px] justify-center gap-2 text-[15px]">
            <FaWallet
              size={15} color="#7d26cd"/>
            Deposit
          </button>
          <button className="bg-[#1E1E1E] left-[-40px] w-[100px] text-white py-2 px-2 relative top-[-10px] font-[syne] rounded-full font-light flex items-center justify-center gap-2 text-[13.5px]">
            <RiBankCardFill 
              size={15} color="#7d26cd"/>
            Withdraw
          </button>
          <button className="bg-[#1E1E1E] left-[-50px] w-[120px] text-white py-2 px-4 relative top-[-10px] rounded-full font-[syne] font-light flex items-center justify-center gap-2 text-[15px]">
            <FaExchangeAlt 
              size={15} color="#7d26cd"/>
            Transfer
          </button>
        </div>
        <div className="border-b relative left-[-10px] border-gray-700 top-[-20px] md:w-full w-[120%]"></div>
      </div>
      {showReferralButton && (
        <button 
          onClick={() => setIsModalOpen(true)}
          className="fixed left-1/2 transform -translate-x-1/2 bottom-20 z-40 bg-[#7F3DFF] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-[#6a34d9] transition-colors min-w-[200px] max-w-[300px] w-[80%] sm:w-auto"
        >
          Share & Earn
        </button>
      )}
      <ReferralModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default ActionButtons;
