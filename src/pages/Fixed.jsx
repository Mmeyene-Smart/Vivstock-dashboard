import { FaLock } from 'react-icons/fa';

const Fixed = () => {
  return (
    <div className='bg-transparent text-white p-4'>
      <h1 className="bg-purple-600 p-2 h-[70px] flex justify-center items-center gap-2 rounded-3xl">
        How Vivstock Fixed Deposits Work
        <FaLock className="text-white ml-2" />
      </h1>
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