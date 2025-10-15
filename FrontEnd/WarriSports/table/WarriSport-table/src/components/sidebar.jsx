import { MoreVertical, ArrowLeft, ArrowRight } from "lucide-react"
import { useContext, createContext, useState } from "react"
import MainLogo from '../assets/images/WS--Logo__8.png'



const SidebarContext = createContext()

const Sidebar = ({ children }) => {

  const [expanded, setExpanded] = useState(true);

  return (
    <div className="container flex gap-5 items-start">
      <div className="ws--sidebar">
        <aside className="w-[250px] bg-white h-screen p-[1rem]">
          {/* <h2>Account Overview</h2> */}
          <nav className='h-full flex flex-col bg-white shadow-sm mt-3 rounded-sm'>
            <div className='p-4 pb-4 flex justify-between items-center gap-10'>
              <img src={ MainLogo } alt="Main logo" className={`overflow-hidden transition-all ${ expanded ? "w-28" : "w-0"}`} />

              <button onClick={() => setExpanded((curr) => !curr)} className="p-2 rounded-full bg-gray-50 hover:gray-100"> { expanded ? <ArrowLeft /> : <ArrowRight />}</button>
            </div>
            <SidebarContext.Provider value={{ expanded }}>
              <ul className="flex-2 px-3">{ children }</ul>
            </SidebarContext.Provider>

            <div className="border-t border-[#ff0000] flex p-3 items-center gap-4">
              <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                alt=""
                className="w-10 h-10 rounded-full"
              />

              <div className={`flex justify-between items-center overflow-hidden transition-all`}>
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
      <div className="ws--sidebar-table w-8/12">
          <table className="table-auto h-auto mx-auto overflow-auto rounded-lg shadow-sm p-5 mt-7">
            <thead className="bg-gray-50 border-b-2 border-[#ff0000]">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">ID</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Stake &#x20A6;</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Odd</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Potential Return &#x20A6;</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 hover:bg-[#3A7F4B] text-gray-700 hover:text-white">
                <td className="p-3 text-sm  whitespace-nowrap">378</td>
                <td className="p-3 text-sm  whitespace-nowrap">100.00</td>
                <td className="p-3 text-sm  whitespace-nowrap">1.20</td>
                <td className="p-3 text-sm  whitespace-nowrap">120.00</td>
                <td className="p-3 text-sm  whitespace-nowrap">14/10/2025</td>
              </tr>
              <tr className="bg-white hover:bg-[#3A7F4B] text-gray-700 hover:text-white">
                <td className="p-3 text-sm  whitespace-nowrap">378</td>
                <td className="p-3 text-sm  whitespace-nowrap">100.00</td>
                <td className="p-3 text-sm  whitespace-nowrap">1.20</td>
                <td className="p-3 text-sm  whitespace-nowrap">120.00</td>
                <td className="p-3 text-sm  whitespace-nowrap">14/10/2025</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-[#3A7F4B] text-gray-700 hover:text-white">
                <td className="p-3 text-sm  whitespace-nowrap">378</td>
                <td className="p-3 text-sm  whitespace-nowrap">100.00</td>
                <td className="p-3 text-sm  whitespace-nowrap">1.20</td>
                <td className="p-3 text-sm  whitespace-nowrap">120.00</td>
                <td className="p-3 text-sm  whitespace-nowrap">14/10/2025</td>
              </tr>
            </tbody>
          </table>
          <TransactionHistory />
        </div>
    </div>
  );
};

function TransactionHistory () {

  return (
    <>
      <table className="table-auto mx-auto overflow-auto rounded-lg shadow-sm mt-5">
          <thead className="bg-gray-50 border-b-2 border-[#ff0000]">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Type</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Trade No.</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Amount &#x20A6;</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">After Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 hover:bg-[#3A7F4B] text-gray-700 hover:text-white">
              <td className="p-3 text-sm  whitespace-nowrap">14/10/2025</td>
              <td className="p-3 text-sm  whitespace-nowrap">Transfer</td>
              <td className="p-3 text-sm  whitespace-nowrap">689301</td>
              <td className="p-3 text-sm  whitespace-nowrap">120.00</td>
              <td className="p-3 text-sm  whitespace-nowrap">Paid</td>
              <td className="p-3 text-sm  whitespace-nowrap">200</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-[#3A7F4B] text-gray-700 hover:text-white">
              <td className="p-3 text-sm  whitespace-nowrap">14/10/2025</td>
              <td className="p-3 text-sm  whitespace-nowrap">Bank</td>
              <td className="p-3 text-sm  whitespace-nowrap">789301</td>
              <td className="p-3 text-sm  whitespace-nowrap">7020.00</td>
              <td className="p-3 text-sm  whitespace-nowrap">Paid</td>
              <td className="p-3 text-sm  whitespace-nowrap">1000</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-[#3A7F4B] text-gray-700 hover:text-white">
              <td className="p-3 text-sm  whitespace-nowrap">14/10/2025</td>
              <td className="p-3 text-sm  whitespace-nowrap">Transfer</td>
              <td className="p-3 text-sm  whitespace-nowrap">989301</td>
              <td className="p-3 text-sm  whitespace-nowrap">520.00</td>
              <td className="p-3 text-sm  whitespace-nowrap">Paid</td>
              <td className="p-3 text-sm  whitespace-nowrap">3000</td>
            </tr>
          </tbody>
      </table>
    </>
  )
}

export default Sidebar;

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
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"}`}>
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}>
          {text}
        </div>
      )}
    </li>
  )
}

