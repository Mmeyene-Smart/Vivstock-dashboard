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
  const [showReferralButton, setShowReferralButton] = useState(false);
  const timeoutRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowReferralButton(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowReferralButton(true);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        {showReferralButton && (
          <button
            onClick={openModal}
            className="bg-purple-600 text-white py-3 px-4 rounded-full fixed bottom-20 right-4 hover:bg-purple-700 w-[50%] h-[45px] text-2xl flex left-[25%] z-50"

            // className="w-[110%] bg-purple-600 h-[45px] text-black top-[-30px] relative left-[-15px] text-[16px] font-[Poppins] font-semibold py-3 rounded-[15px] hover:bg-purple-700 transition-colors"
          >
            <img src={'./vivstock-logo.jpg'} width={30} height={30} alt="" />
            ..
            ..
          </button>
        )}
        <ReferralModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
}

export default ActionButtons;