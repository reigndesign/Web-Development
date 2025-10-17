import { LayoutDashboard, HandCoins, BanknoteArrowUp, BanknoteArrowDown, UserCog, Users, } from 'lucide-react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router'
import Sidebar  from './components/sidebar'
import { SidebarItem } from './components/sidebar'
import  BetHistory from './components/sidebar'
import Dashboard from './components/pages/dashboard'
import Transactions from './components/pages/paymentHistory'
import Deposit from './components/pages/deposit'
import Withdraw from './components/pages/withdraw'
import Referral from './components/pages/referral'
import Settings from './components/pages/settings'


function App() {
  return (
    <>
      <Router>
        <main className='App'>
          {/* Navigation */}
          <Sidebar>
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" as={Link} to="/dashboard" />
            <SidebarItem icon={<HandCoins size={20} />} text="Bet History" as={Link} to="/bet-history" />
            <SidebarItem icon={<BanknoteArrowDown size={20} />} text="Withdraw" as={Link} to="/withdraw" />
            <SidebarItem icon={<BanknoteArrowUp size={20} />} text="Deposit" as={Link} to="/deposit" />
            <SidebarItem icon={<BanknoteArrowUp size={20} />} text="Trasactions" as={Link} to="/transactions" />
            <SidebarItem icon={<Users size={20} />} text="Referral" as={Link} to="/referral" />
            <SidebarItem icon={<UserCog size={20} />} text="Settings" as={Link} to="/settings" />
          </Sidebar>
          <Routes>
            <Route path="/bet-history" element={<BetHistory />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/referral" element={ <Referral />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/dashboard" element={ <Dashboard />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
