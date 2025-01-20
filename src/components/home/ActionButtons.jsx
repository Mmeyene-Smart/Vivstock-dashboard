import { useState, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaWallet } from 'react-icons/fa';
import { RiBankCardFill } from 'react-icons/ri';
import { FaExchangeAlt } from 'react-icons/fa';

function ReferralModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-[#1E1E1E] rounded-lg p-6 w-[90%] max-w-md relative">
        <h2 className="text-xl font-bold mb-4">Share Referral Link</h2>
        <div className="bg-[#111111] p-4 rounded-lg mb-4">
          <p className="text-gray-400 break-all text-[15px]">https://Vivstocks.com/ref/hopeubong2430</p>
        </div>
        <button 
          onClick={onClose}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white"
        >
          <IoClose size={24} />
        </button>
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
            {/* <FaWallet
              size={15} color="#7d26cd"/> */}

            <svg xmlns="http://www.w3.org/2000/svg" fill="#7626cd" width="15px" height="15px" viewBox="0 0 24.00 24.00" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)" stroke="#7626cd" stroke-width="0.12000000000000002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.6 21H4.4C3.1 21 2 19.9 2 18.6V14h2v4.2c0 .6.4.8 1 .8h14c.6 0 1-.4 1-1v-4h2v4.6c0 1.3-1.1 2.4-2.4 2.4z"></path><path d="M15.3 12.1L13.4 14v-4c0-2 0-4.9 2.4-7-3.4.6-5.1 3.2-5.2 7v4l-1.9-1.9L7 13l5 5 5-5-1.7-.9z"></path></g></svg>
            Deposit
          </button>
          <button className="bg-[#1E1E1E] left-[-40px] w-[100px] text-white py-2 px-2 relative top-[-10px] font-[syne] rounded-full font-light flex items-center justify-center gap-2 text-[13.5px]">
            {/* <RiBankCardFill 
              size={15} color="#7d26cd"/> */}

            <svg xmlns="http://www.w3.org/2000/svg" fill="#7d26cd" width="15px" height="15px" viewBox="0 0 24 24" transform="matrix(-1, 0, 0, -1, 0, 0)" stroke="#7d26cd" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"><path d="M19.6 21H4.4C3.1 21 2 19.9 2 18.6V14h2v4.2c0 .6.4.8 1 .8h14c.6 0 1-.4 1-1v-4h2v4.6c0 1.3-1.1 2.4-2.4 2.4z"></path><path d="M15.3 12.1L13.4 14v-4c0-2 0-4.9 2.4-7-3.4.6-5.1 3.2-5.2 7v4l-1.9-1.9L7 13l5 5 5-5-1.7-.9z"></path></g></svg>
            Withdraw
          </button>
          <button className="bg-[#1E1E1E] left-[-50px] w-[120px] text-white py-2 px-4 relative top-[-10px] rounded-full font-[syne] font-light flex items-center justify-center gap-2 text-[15px]">
            {/* <FaExchangeAlt 
              size={15} color="#7d26cd"/> */}

            <svg xmlns="http://www.w3.org/2000/svg" fill="#7d26cd" width="15px" height="15px" viewBox="0 0 24 24" stroke="#7d26cd" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"><path d="M3.8 9.2c0-.9 1-2.6 2.3-3.1s3.3-.5 6-.5c2.9 0 5.8.5 5.8.5l-2.3-2.3 1-1.9L22 7.4l-5.5 5.5-1-1.9 2.3-2.3s-2.9-.5-5.9-.5c-2.6 0-4.6 0-5.9.5s-2.2 3.7-2.2 3.7V9.2z"></path><path d="M20.2 14.8c0 .9-1 2.6-2.3 3.1s-3.3.5-6 .5c-2.9 0-5.8-.5-5.8-.5l2.3 2.3-1 1.9L2 16.6l5.5-5.5 1 1.9-2.3 2.3s2.9.5 5.9.5c2.6 0 4.6 0 5.9-.5s2.2-3.7 2.2-3.7v3.2z"></path></g></svg>
            Transfer
          </button>
        </div>
        {showReferralButton && (
          <button
            onClick={openModal}
            className="bg-purple-600 text-white py-3 px-4 rounded-full fixed bottom-20 right-4 hover:bg-purple-700 w-[50%] h-[45px] text-2xl flex left-[25%] z-50"

            // className="w-[110%] bg-purple-600 h-[45px] text-black top-[-30px] relative left-[-15px] text-[16px] font-[Poppins] font-semibold py-3 rounded-[15px] hover:bg-purple-700 transition-colors"
          >
            {/* <img src={'./vivstock-logo.jpg'} width={30} height={30} alt="" /> */}
            <span>
              <div>..</div>
              <div>..</div>
            </span>
          </button>
        )}
        <ReferralModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
}

export default ActionButtons;