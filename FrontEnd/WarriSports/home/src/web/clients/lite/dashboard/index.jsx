import NavBar from '../../components/navBar';
import DashBoarSidebar from '../../components/sideBar';
import DashboardLayout from '../../../layout/dashboardLayout';

const Dashboard = () => {
    return (
          <>
            <NavBar />
            <div className="flex justify-between items-start ">
              <DashBoarSidebar />
              <div className="ws-middle--container w-8/12 mx-auto mt-10 shadow-lg">
                <DashboardLayout />
              </div>
            </div>
          </>  
    );
}

export default Dashboard;
