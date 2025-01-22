import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineAnalytics } from 'react-icons/md';
import { BiTransfer } from 'react-icons/bi';
import { RiHistoryLine } from 'react-icons/ri';
import { IoWalletOutline } from 'react-icons/io5';
import { stockData } from '../data/stockData';

const Sidebar = ({ hideOnMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isTradeActive = location.pathname.includes('/trade');

  const handleTradeClick = (e) => {
    if (location.pathname === '/trade') {
      e.preventDefault();
      if (stockData.length > 0) {
        navigate(`/trade/${stockData[0].symbol}`);
      }
    }
  };

  const menuItems = [
    { path: '/', icon: AiOutlineHome, label: 'Home' },
    { path: '/market', icon: MdOutlineAnalytics, label: 'Market' },
    { path: '/trade', icon: BiTransfer, label: 'Trade', onClick: handleTradeClick },
    { path: '/history', icon: RiHistoryLine, label: 'History' },
    { path: '/wallet', icon: IoWalletOutline, label: 'Wallet' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-64  h-[10px] bg-[#424242b7] fixed left-0 top-0">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <h1 className="text-2xl font-bold text-white"><img src="/Vivstock_logo__1_-removebg-preview 1 197.png" className='w-[38px] ' /> Vicstock</h1>
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={item.onClick}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    (isActive || (item.path === '/trade' && isTradeActive))
                      ? 'bg-[#7F3DFF] text-white'
                      : 'text-gray-400 hover:bg-[#1E1E1E] hover:text-white'
                  }`
                }
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      {!hideOnMobile && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#111111] border-t border-[#1E1E1E] z-50">
          <nav className="flex justify-around py-2 px-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={item.onClick}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 ${
                    (isActive || (item.path === '/trade' && isTradeActive))
                      ? 'text-[#7F3DFF]'
                      : 'text-gray-400'
                  }`
                }
              >
                <item.icon size={24} />
                <span className="text-xs font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Sidebar;