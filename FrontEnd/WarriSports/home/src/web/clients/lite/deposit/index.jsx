import DashBoarSidebar from "../../components/sideBar";
import NavBar from "../../components/navBar";
import DepositLayout from '../../../layout/depositLayout'

const Deposit = () => {
    return (
          <>
            <NavBar />
            <div className="flex justify-between items-start ">
              <DashBoarSidebar />
              <div className="ws-middle--container w-8/12 mx-auto mt-10 shadow-lg h-auto bg-white">
                <DepositLayout />
              </div>
            </div>
          </>
    );
}

export default Deposit;