import DashBoarSidebar from "../../components/sideBar";
import { PiMagnifyingGlassBold } from "react-icons/pi";


const AdminHome = () => {
  return (
    <>
      <div className="ws--container flex">
        <div className="ws--sideBar">
          <DashBoarSidebar />
        </div>
        <div className="ws--sideBar flex w-full justify-center bg-grey-700 h-88dvh shadow-lg">
          <div className="ws--container flex flex-col">
            <div className="ws--headline flex items-center justify-between">
              <div className="ws--main_headline flex flex-col mt-5 ">
                <h1 className="ws--headline-text uppercase font-normal text-2xl">Dashboard</h1>
                <h4 className="ws--sub_hadlinetext uppercase text-[#009966]">Welcome to warrisport limited</h4>
              </div>
              <div className="ws--search-bar flex flex-col gap-2 mt-5">
                <div className="ws--search flex items-center gap-5 cursor-pointer">
                  <input type="search" name="search" id="search" placeholder="search..." className="border-2 w-45 h-8 outline-0" /><PiMagnifyingGlassBold />
                </div>
                  <button className="py-2 px-4 bg-[#009966] text-white rounded-sm cursor-pointer">Download report</button>
              </div>
            </div>
            <div className="ws--row flex gap-3 mt-10">
              <div className="ws--card h-40 w-45 bg-white shadow-sm"></div>
              <div className="ws--card h-40 w-45 bg-white shadow-sm"></div>
              <div className="ws--card h-40 w-45 bg-white shadow-sm"></div>
              <div className="ws--card h-40 w-45 bg-white shadow-sm"></div>
              <div className="ws--card h-40 w-45 bg-white shadow-sm"></div>
              <div className="ws--card h-40 w-45 bg-white shadow-sm"></div>
            </div>
            <div className="pt-5 flex gap-3">
              <div className="h-80 w-7/12 bg-white rounded-lg shadow-sm"></div>
              <div className="h-80 w-5/12 bg-[#009966] rounded-lg shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
