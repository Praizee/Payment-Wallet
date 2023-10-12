import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollButton from "../../Components/ScrollToTop/ScrollToTop";
import Navbar from "../../Components/Navbar/Navbar";
import { SidebarWithSearch } from "../../Components/SideBarMenu/SideBarMenu";

const AuthenticatedLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex h-screen">
      <Navbar toggleSidebar={toggleSidebar} /> {/* Pass the toggleSidebar function to the Navbar */}

      <div className="flex-1 flex overflow-hidden">
        <div className=" mt-[5.5rem] h-ful overflow-y-auto">
          <SidebarWithSearch showSidebar={showSidebar} /> {/* Pass the showSidebar state to the SidebarWithSearch */}
        </div>

        <main className="flex-1 overflow-x-auto overflow-y-auto bg-gray-200 dark:bg-gray-900">
          {/* overflow-x-hidden */}
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>

      <ScrollButton />
    </div>
  );
};

export default AuthenticatedLayout;
