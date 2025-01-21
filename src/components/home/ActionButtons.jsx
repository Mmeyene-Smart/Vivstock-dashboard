import { useState, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { FaCopy } from 'react-icons/fa';

function ReferralModal({ isOpen, onClose }) {
  const [showBalance, setShowBalance] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;
   
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-end justify-center z-50 transition-opacity duration-300 ease-in-out"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        ref={modalRef}
        className="bg-[#1A1A1A] rounded-[30px] w-[70%] relative p-6 transform transition-all duration-300 ease-out mx-4 fixed bottom-[18%] max-sm:w-full"
        style={{
          animation: 'animate-grow 1.7s ease-in'
        }}
      >
        <div className="mb-6">
          <div className="mb-8">
            <div className="rounded-lg p-6 mb-8 relative top-[-30px] left-[-25px]">
              <div className="mb-2">
                <div className="text-[15px] text-white">Referal Balance </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-2xl">$</span>
                  <span className="text-3xl relative left-[-8px] font-bold">
                    {showBalance ? '0.00' : '****'}
                  </span>
                  <button 
                    onClick={() => setShowBalance(!showBalance)}
                    className="text-gray-400 hover:text-white relative left-[-10px] transition-colors"
                  >
                    {showBalance ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative top-[-85px] flex gap-[5px] left-[-5px]">
          <button className="bg-[#000] w-[90px] h-[40px] rounded-[20px] hover:bg-gray-900 transition-colors">
            Claim
          </button>
          <button className="bg-[#000] w-[90px] h-[40px] rounded-[20px] hover:bg-gray-900 transition-colors">
            Withdraw
          </button>
        </div>

        <div className="relative top-[-70px] left-[-5px] w-[75%] h-[40px] rounded-full bg-[#000] flex items-center gap-[10px] justify-center group cursor-pointer hover:bg-gray-900 transition-colors max-sm:w-full">
          <span className="text-center text-sm max-sm:text-[13px]">
            https://Vivstock.com/username
          </span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
            <FaCopy size={13} />
          </span>
        </div>

        <button 
          onClick={onClose}
          className="absolute w-[50px] h-[50px] left-1/2 transform -translate-x-1/2 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center border-[4px] border-[#1A1A1A] bottom-[-25px] transition-colors"
        >
          <IoClose size={30} className="text-white font-bold" />
        </button>
      </div>
    </div>
  );
}

function ActionButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showReferralButton, setShowReferralButton] = useState(true);
  const timeoutRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    setShowReferralButton(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setShowReferralButton(true), 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isModalOpen) {
        setShowReferralButton(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setShowReferralButton(true);
        }, 200);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isModalOpen]);

  return (
    <>
      <div>
        <div className="flex justify-start gap-7 mb-8 mt-[-27px] pl-6 pr-4">
          <button className="bg-[#1E1E1E] w-[110px] top-[-10px] relative text-2l text-white py-2 px-[10px] rounded-full font-[syne] font-light flex items-center left-[-30px] justify-center gap-2 text-[15px] hover:bg-gray-800 transition-colors">
            Deposit
          </button>
          <button className="bg-[#1E1E1E] left-[-40px] w-[100px] text-white py-2 px-2 relative top-[-10px] font-[syne] rounded-full font-light flex items-center justify-center gap-2 text-[13.5px] hover:bg-gray-800 transition-colors">
            Withdraw
          </button>
          <button className="bg-[#1E1E1E] left-[-50px] w-[120px] text-white py-2 px-4 relative top-[-10px] rounded-full font-[syne] font-light flex items-center justify-center gap-2 text-[15px] hover:bg-gray-800 transition-colors">
            Transfer
          </button>
        </div>
        {showReferralButton && !isModalOpen && (
          <button
            onClick={openModal}
            className="bg-[#7F3DFF] text-white py-3 px-4 rounded-full fixed bottom-20 right-4 hover:bg-purple-700 w-[20%] h-[45px] text-2xl flex left-[40%] z-40 items-center justify-center transition-all duration-300 transform hover:scale-105 max-sm:w-[25%] max-sm:left-[40%] max-[620px]:w-[30%]"
          >
            <span className="text-sm font-medium">
              {/* <img src="/vivstock-logo.jpg" /> */}
              
              <svg fill="#fff" width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"> <path fill-rule="evenodd" d="M20,22 C18.8954305,22 18,21.1045695 18,20 C18,18.8954305 18.8954305,18 20,18 C21.1045695,18 22,18.8954305 22,20 C22,21.1045695 21.1045695,22 20,22 Z M20,14 C18.8954305,14 18,13.1045695 18,12 C18,10.8954305 18.8954305,10 20,10 C21.1045695,10 22,10.8954305 22,12 C22,13.1045695 21.1045695,14 20,14 Z M20,6 C18.8954305,6 18,5.1045695 18,4 C18,2.8954305 18.8954305,2 20,2 C21.1045695,2 22,2.8954305 22,4 C22,5.1045695 21.1045695,6 20,6 Z M12,22 C10.8954305,22 10,21.1045695 10,20 C10,18.8954305 10.8954305,18 12,18 C13.1045695,18 14,18.8954305 14,20 C14,21.1045695 13.1045695,22 12,22 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M12,6 C10.8954305,6 10,5.1045695 10,4 C10,2.8954305 10.8954305,2 12,2 C13.1045695,2 14,2.8954305 14,4 C14,5.1045695 13.1045695,6 12,6 Z M4,22 C2.8954305,22 2,21.1045695 2,20 C2,18.8954305 2.8954305,18 4,18 C5.1045695,18 6,18.8954305 6,20 C6,21.1045695 5.1045695,22 4,22 Z M4,14 C2.8954305,14 2,13.1045695 2,12 C2,10.8954305 2.8954305,10 4,10 C5.1045695,10 6,10.8954305 6,12 C6,13.1045695 5.1045695,14 4,14 Z M4,6 C2.8954305,6 2,5.1045695 2,4 C2,2.8954305 2.8954305,2 4,2 C5.1045695,2 6,2.8954305 6,4 C6,5.1045695 5.1045695,6 4,6 Z"></path> </g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M20,22 C18.8954305,22 18,21.1045695 18,20 C18,18.8954305 18.8954305,18 20,18 C21.1045695,18 22,18.8954305 22,20 C22,21.1045695 21.1045695,22 20,22 Z M20,14 C18.8954305,14 18,13.1045695 18,12 C18,10.8954305 18.8954305,10 20,10 C21.1045695,10 22,10.8954305 22,12 C22,13.1045695 21.1045695,14 20,14 Z M20,6 C18.8954305,6 18,5.1045695 18,4 C18,2.8954305 18.8954305,2 20,2 C21.1045695,2 22,2.8954305 22,4 C22,5.1045695 21.1045695,6 20,6 Z M12,22 C10.8954305,22 10,21.1045695 10,20 C10,18.8954305 10.8954305,18 12,18 C13.1045695,18 14,18.8954305 14,20 C14,21.1045695 13.1045695,22 12,22 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M12,6 C10.8954305,6 10,5.1045695 10,4 C10,2.8954305 10.8954305,2 12,2 C13.1045695,2 14,2.8954305 14,4 C14,5.1045695 13.1045695,6 12,6 Z M4,22 C2.8954305,22 2,21.1045695 2,20 C2,18.8954305 2.8954305,18 4,18 C5.1045695,18 6,18.8954305 6,20 C6,21.1045695 5.1045695,22 4,22 Z M4,14 C2.8954305,14 2,13.1045695 2,12 C2,10.8954305 2.8954305,10 4,10 C5.1045695,10 6,10.8954305 6,12 C6,13.1045695 5.1045695,14 4,14 Z M4,6 C2.8954305,6 2,5.1045695 2,4 C2,2.8954305 2.8954305,2 4,2 C5.1045695,2 6,2.8954305 6,4 C6,5.1045695 5.1045695,6 4,6 Z"></path> </g></svg></span>
          </button>
        )}
        <ReferralModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
}

export default ActionButtons;