function BetHistory() {
  return (
    <>
      <div className="main--table">
        <div className="p-5 h-screen bg-gray-200">
          
          <div className="w-8/12 mx-auto overflow-auto rounded-lg shadow-sm mt-5">
            
            <table className="table-auto h-auto">
              <thead className="bg-gray-50 border-b-2 border-[#292828]">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">ID</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Stake &#x20A6;</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Odd</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Potential Return &#x20A6;</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 hover:bg-green-500">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">378</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">100.00</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1.20</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">120.00</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">14/10/2025</td>
                </tr>
                <tr className="bg-white hover:bg-green-500">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">378</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">100.00</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1.20</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">120.00</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">14/10/2025</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-green-500">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">378</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">100.00</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1.20</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">120.00</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">14/10/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}



export default BetHistory
