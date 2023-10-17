import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import ScrollButton from "../../Components/ScrollToTop/ScrollToTop";
import Navbar from "../../Components/Navbar/Navbar";
import { SidebarWithSearch } from "../../Components/SideBarMenu/SideBarMenu";

const AuthenticatedLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false); // Initially set to false

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowSidebar(true); // Show the sidebar for screens wider than or equal to 768px
      }
    };

    // Add a resize event listener to the window
    window.addEventListener('resize', handleResize);

    // Call the handleResize function initially
    handleResize();

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex h-screen">
      <Navbar toggleSidebar={toggleSidebar} /> {/* this Passes the toggleSidebar function to the Navbar */}

      <div className="flex-1 flex overflow-hidden">
        <div className=" mt-[5.5rem] h-ful overflow-y-auto">
          <SidebarWithSearch showSidebar={showSidebar} /> {/* this Passes the showSidebar state to the SidebarWithSearch */}
        </div>

        <main className="flex-1 overflow-x-auto overflow-y-auto bg-[#F6F6F6] dark:bg-gray-900">
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
