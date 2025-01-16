import { IoEyeOutline } from 'react-icons/io5';

function WalletHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-white">My Assets</h1>
      {/* <IoEyeOutline size={24} className="text-gray-400" /> */}
    </div>
  );
}

export default WalletHeader;