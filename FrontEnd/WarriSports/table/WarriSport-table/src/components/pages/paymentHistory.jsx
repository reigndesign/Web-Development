import React from 'react';

export default function Transactions() {
  return (
    <>
      {/* Add your payment history table or content here */}
      <table className="table-auto mx-auto overflow-auto rounded-lg shadow-sm mt-5">
        <thead className="bg-gray-50 border-b-2 border-[#ff0000]">
          <tr>
            {/* Add table headers here if needed */}
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Type</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Amount &#x20A6;</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Reference</th>
          </tr>
        </thead>
        <tbody>
          {/* Add table rows here if needed */}
          <tr className="bg-gray-50 hover:bg-[#3A7F4B] text-gray-700 hover:text-white">
            <td className="p-3 text-sm  whitespace-nowrap">12/10/2025</td>
            <td className="p-3 text-sm  whitespace-nowrap">Deposit</td>
            <td className="p-3 text-sm  whitespace-nowrap">10,000</td>
            <td className="p-3 text-sm  whitespace-nowrap">Completed</td>
            <td className="p-3 text-sm  whitespace-nowrap">REF123456</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-[#3A7F4B] text-gray-700 hover:text-white">
            <td className="p-3 text-sm  whitespace-nowrap">13/10/2025</td>
            <td className="p-3 text-sm  whitespace-nowrap">Withdrawal</td>
            <td className="p-3 text-sm  whitespace-nowrap">5,000</td>
            <td className="p-3 text-sm  whitespace-nowrap">Pending</td>
            <td className="p-3 text-sm  whitespace-nowrap">REF654321</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-[#3A7F4B] text-gray-700 hover:text-white">
            <td className="p-3 text-sm  whitespace-nowrap">14/10/2025</td>
            <td className="p-3 text-sm  whitespace-nowrap">Deposit</td>
            <td className="p-3 text-sm  whitespace-nowrap">20,000</td>
            <td className="p-3 text-sm  whitespace-nowrap">Completed</td>
            <td className="p-3 text-sm  whitespace-nowrap">REF789012</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};