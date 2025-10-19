import DashBoarSidebar from '../clients/components/sideBar';
import React from 'react'

function DashboardLayout() {
  const isOpen = React.useState(true);
  
  return (
    <>
      <div className="ws-container">
        <div className="flex justify-between items-start gap-5">
          <DashBoarSidebar isOpen={isOpen} />
          <div className="ws-middle--container w-8/12 h-auto mx-auto mt-5">
            <div className='ws-middle--row h-85 bg-white mt-5 shadow-lg'>
              <table className='ws-table w-auto text-gray-700'>
                <thead className='table-auto'>
                  <tr className='flex items-center'>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-emerald-300 hover:bg-emerald-400 duration-300 cursor-pointer'>
                    <td className='text-left '>
              
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;