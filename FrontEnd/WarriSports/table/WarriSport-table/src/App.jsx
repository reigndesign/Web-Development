import { LayoutDashboard, HandCoins, BanknoteArrowUp, BanknoteArrowDown, UserCog, Users, } from 'lucide-react'
import BetHistory from './components/history'
import TransactionHistory from './components/history'
import Sidebar from './components/sidebar'
import { SidebarItem } from './components/sidebar'


function App() {
  return (
    <>
      <main className='App'>
        <Sidebar >
          <SidebarItem icon={< LayoutDashboard size={20} /> } text="Dashboard" alert></SidebarItem>
          <SidebarItem icon={< HandCoins size={20} /> } text="Bet History" alert></SidebarItem>
          <SidebarItem icon={< BanknoteArrowDown size={20} /> } text="Withdraw" alert></SidebarItem>
          <SidebarItem icon={< BanknoteArrowUp size={20} /> } text="Deposit" alert></SidebarItem>
          <SidebarItem icon={< Users size={20} /> } text="Referral" alert></SidebarItem>
          <SidebarItem icon={< UserCog size={20} /> } text="Settings" alert></SidebarItem>
        </Sidebar>
      </main>
      <BetHistory />
      <TransactionHistory />
    </>
  )
}

export default App
