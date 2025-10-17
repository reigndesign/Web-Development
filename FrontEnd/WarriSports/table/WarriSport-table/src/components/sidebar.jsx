import { MoreVertical, ArrowLeft, ArrowRight } from "lucide-react"
import { useContext, createContext, useState } from "react"
import MainLogo from '../assets/images/WS--Logo__8.png'
import BetHistory from './pages/betHistory'
import Transactions from './pages/paymentHistory'

// Create context at the top level



const SidebarContext = createContext()

export default function Sidebar({ children }) {

  const [activeIndex, setActiveIndex] = useState(" ");

  // Removed unused handleItemClick function

  return (
    <div className="container flex gap-5 items-start">
      <div className="ws--sidebar h-full">
        <aside className="w-[250px] bg-white h-screen">
          <h2 className="absolute left-4 p-2">Account Overview</h2>
          <nav className='h-full flex flex-col bg-white shadow-sm mt-3 rounded-sm'>
            <div className='p-4 pb-4 flex justify-between items-center gap-10'>
              <img src={ MainLogo } alt="Main logo" className={`overflow-hidden transition-all p-1 w-28 `} />

              {/* <button onClick={() => setExpanded((curr) => !curr)} className="p-2 rounded-full bg-gray-50 hover:gray-100"> { expanded ? <ArrowLeft /> : <ArrowRight />}</button> */}
            </div>
            
            <SidebarContext.Provider value={{ activeIndex, setActiveIndex }}>
              <ul className="flex-1 px-3">{ children }</ul>
            </SidebarContext.Provider>

            <div className="border-t border-[#ff0000] flex p-3 items-center gap-4">
              <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                alt=""
                className="w-10 h-10 rounded-full"
              />



              <div className={`flex justify-between items-center transition-all `}>
                <div className="leading-4">
                  <h4 className="font-semibold">John Doe</h4>
                  <span className="text-xs text-gray-600 ">johndoe@gmail.com</span>
                </div>
                <MoreVertical size={20} className="cursor-pointer "/>
              </div>
            </div>
          </nav>
        </aside>
      </div>
      
      <div className="flex-1 p-5">
        { activeIndex === "Bet History" ? <BetHistory /> : activeIndex === "Transaction History" ? <Transactions /> : <BetHistory /> }
      </div>
    </div>
  );
};

// Move exports to the top level


export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600 "
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all w-52 ml-3`}>
        {text}
      </span>
      {alert && (
        <span className="absolute top-2 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
      )} 
    </li>
  )
}

