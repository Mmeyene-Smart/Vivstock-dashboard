import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Market from './pages/Market';
import StockList from './components/StockList';
import StockDetail from './components/StockDetail';
import Wallet from './pages/Wallet';
import TraderProfile from './pages/TraderProfile';

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.includes('/trade/') || location.pathname.includes('/trader/');

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Sidebar hideOnMobile={hideNavbar} />
      <div className="lg:pl-64">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/market/stocks" element={<StockList />} />
          <Route path="/trade/:symbol" element={<StockDetail />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/trader/:traderId" element={<TraderProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;