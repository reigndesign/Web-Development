import React from 'react';

export default function BetHistory() {
  return (
    <>
      {/* Add bet history table or content here */}
      <table className="table-auto mx-auto overflow-auto rounded-lg shadow-sm mt-5">
        <thead className="bg-gray-50 border-b-2 border-[#ff0000]">
          <tr>
            {/* Add table headers here if needed */}
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Game</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Selection</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Odds</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Stake &#x20A6;</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Payout &#x20A6;</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50 hover:bg-[#3A7F4B] text-gray-700 hover:text-white">
            {/* Add table rows here if needed */}
            <td className="p-3 text-sm  whitespace-nowrap">14/10/2025</td>
            <td className="p-3 text-sm  whitespace-nowrap">Football</td>
            <td className="p-3 text-sm  whitespace-nowrap">Manchester United</td>
            <td className="p-3 text-sm  whitespace-nowrap">1.80</td>
            <td className="p-3 text-sm  whitespace-nowrap">500</td>
            <td className="p-3 text-sm  whitespace-nowrap">900</td>
            <td className="p-3 text-sm  whitespace-nowrap">Won</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-[#3A7F4B] text-gray-700 hover:text-white">
            <td className="p-3 text-sm  whitespace-nowrap">14/10/2025</td>
            <td className="p-3 text-sm  whitespace-nowrap">Basketball</td>
            <td className="p-3 text-sm  whitespace-nowrap">Los Angeles Lakers</td>
            <td className="p-3 text-sm  whitespace-nowrap">2.50</td>
            <td className="p-3 text-sm  whitespace-nowrap">300</td>
            <td className="p-3 text-sm  whitespace-nowrap">750</td>
            <td className="p-3 text-sm  whitespace-nowrap">Lost</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-[#3A7F4B] text-gray-700 hover:text-white">
            <td className="p-3 text-sm  whitespace-nowrap">14/10/2025</td>
            <td className="p-3 text-sm  whitespace-nowrap">Tennis</td>
            <td className="p-3 text-sm  whitespace-nowrap">Novak Djokovic</td>
            <td className="p-3 text-sm  whitespace-nowrap">1.60</td>
            <td className="p-3 text-sm  whitespace-nowrap">400</td>
            <td className="p-3 text-sm  whitespace-nowrap">640</td>
            <td className="p-3 text-sm  whitespace-nowrap">Pending</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};