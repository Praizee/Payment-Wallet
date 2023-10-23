import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ScrollButton from '../Components/ScrollToTop/ScrollToTop';
import Navbar from '../Components/Navbar/Navbar';
import { SidebarWithSearch } from '../Components/SideBarMenu/SideBarMenu';

import { useAuth } from '../Context/AuthContext'; // Import the useAuth hook

const AuthenticatedLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const { user, loading } = useAuth(); // Access user and loading from the context

  // Handle redirect when user is not authenticated
  useEffect(() => {
    if (loading) {
      // If still loading, show a loading indicator
      return;
    }

    if (!user) {
      // If the user is not authenticated, redirect to the login page
      navigate('/');
    }
  }, [loading, user, navigate]);

  // Function to handle window resize
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setShowSidebar(true); // Show the sidebar for screens wider than or equal to 768px
    }
  };

  // Add a resize event listener to the window
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Call the handleResize function initially
    handleResize();

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex h-screen">
      {user && !loading && <Navbar toggleSidebar={toggleSidebar} />} {/* Render the Navbar only when user is authenticated and not loading */}

      <div className="flex-1 flex overflow-hidden">
        <div className="mt-[5.5rem] h-full overflow-y-auto">
          {user && !loading && <SidebarWithSearch showSidebar={showSidebar} />} {/* Render the Sidebar only when user is authenticated and not loading */}
        </div>

        <main className="flex-1 overflow-x-auto overflow-y-auto bg-[#F6F6F6] dark:bg-gray-900">
          <div className="container mx-auto px-3 tablet:px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>

      <ScrollButton />
    </div>
  );
};

export default AuthenticatedLayout;