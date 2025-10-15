import { LayoutDashboard, HandCoins, BanknoteArrowUp, BanknoteArrowDown, UserCog, User, } from 'lucide-react'
import BetHistory from './components/history'
import Sidebar from './components/sidebar'


function App() {
  return (
    <main className='App'>
      <Sidebar >
        <SideBarItem icon={< LayoutDashboard size={20} /> } text="Dashboard" alert></SideBarItem>
        <SideBarItem icon={< HandCoins size={20} /> } text="Bet History" alert></SideBarItem>
        <SideBarItem icon={< BanknoteArrowDown size={20} /> } text="Withdraw" alert></SideBarItem>
        <SideBarItem icon={< BanknoteArrowUp size={20} /> } text="Deposit" alert></SideBarItem>
        <SideBarItem icon={< User size={20} /> } text="Referral" alert></SideBarItem>
        <SideBarItem icon={< UserCog size={20} /> } text="Settings" alert></SideBarItem>
      </Sidebar>
      {/* <BetHistory /> */}
    </main>
  )
}

export default App
