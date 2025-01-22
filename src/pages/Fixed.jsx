import { FaLock, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import AssetBalance from '../components/wallet/AssetBalance';
import  { useState } from 'react';
// import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const Fixed = () => {
  const navigate = useNavigate();
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className='bg-transparent text-white p-4'>
      <div className='flex items-center justify-evenly top-[-15px] text-center gap-[30px] relative  left-[-20px] bg-black w-[500px]'>
          <button onClick={() => navigate(-1)} className="flex items-center pb-2 relative left-[-20%]">
            <FaArrowLeft className="mr-2 " /> Back
          </button>
          <p className='text-[20px] pb-2 relative left-[-30%]'>Fixed</p>
      </div>
      <div className="bg-purple-600 p-2 h-[70px] flex justify-center items-center gap-2 rounded-3xl">
        {/* <AssetBalance amount={balance.toFixed(2)}  btcAmount={(balance * 1600).toFixed(2)}/> */}
        <div className="flex items-center gap-2 relative left-5">
            

                  <span className="text-white font-bold text-2xl">$</span>
                  <span className="text-3xl relative left-[-8px] font-bold">
                    {showBalance ? '0.00' : ''}
                  </span> 
                  {/* <button 
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-gray-400 hover:text-white relative left-[-10px] transition-colors"
                >
                  {showBalance ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                </button> */}
        </div>

        <img src="/Padlock-PNG-Transparent-Image.png" width={50} className='relative left-[90px]' height={50} alt="" />
      </div>
      <p className="mt-4">
        With Vivstock, you have the opportunity to invest your funds in a fixed deposit plan, offering a secure way to grow your investment. You can choose between two deposit terms: 6 months or 1 year, depending on your financial goals.
        <br /><br />
        6-Month Fixed Deposit: Opt for a 6-month term, and your funds will be locked in for the duration, earning you guaranteed interest. After 6 months, you can withdraw your principal along with the accumulated interest.
        <br /><br />
        1-Year Fixed Deposit: For those looking for longer-term growth, the 1-year fixed deposit option allows you to lock your funds for a full year. This term typically offers a higher return, rewarding your patience and commitment.
        <br /><br />
        At the end of your chosen term, you can easily withdraw both your initial deposit and the interest earned, or choose to reinvest your funds into another fixed deposit term. Vivstock’s fixed deposit option ensures stability, predictable returns, and flexibility to match your investment preferences.
      </p>

      <button className='w-[180px] text-[20px] rounded-[30px] relative left-[20%] h-[40px] bg-purple-600 text-center'>Create Fixed</button>
    </div>
  )
}

export default Fixed;