import React from "react";
import { Outlet } from "react-router-dom";
import ScrollButton from "../Components/ScrollToTop/ScrollToTop";


const Layout = () => {
  return (
    <section>

      <div className="">
        <Outlet />
      </div>

      <ScrollButton />
    </section>
  );
};

export default Layout;
