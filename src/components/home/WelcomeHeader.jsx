import { IoNotificationsOutline } from 'react-icons/io5';
import { BiMessageDetail } from 'react-icons/bi';

function WelcomeHeader() {
  return (
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-[#7F3DFF] rounded-full flex items-center justify-center">
          <span className="text-xl text-white">HA</span>
        </div>
        <div>
          <p className="text-gray-400">Welcome 👋</p>
          <h1 className="text-2l font-bold">@hopeubong2430</h1>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="w-10 h-10 bg-[#1E1E1E] rounded-full flex ml-[32px] items-center justify-center">
          <BiMessageDetail size={20} />
        </button>
        <button className="w-10 h-10 bg-[#1E1E1E] rounded-full flex items-center justify-center">
          <IoNotificationsOutline size={20} />
        </button>
      </div>
    </div>
  );
}

export default WelcomeHeader;