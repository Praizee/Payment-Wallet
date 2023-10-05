import React, { useState } from "react";
// import { NavbarData } from "./NavbarData"
import { FiMenu } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LuScanLine } from "react-icons/lu";


const Navbar = () => {
  const [showNav, setshowNav] = useState(false)

  return (
    <div className="navbar bg-white border-none fixed py-4 top-0 z-[100]">
      <div className="flex-1 laptop:mx-[rem] mx-">
        <div className="flex-none ">
          <button className="btn btn-square btn-ghost">
            <FiMenu size={25} />
          </button>
        </div>

        <div className="flex-1 mx-4">
          <a className="leading-[1.5rem] text-black font-black text-[1.5rem]">
            Logo
          </a>
        </div>
      </div>

      <div className="navbar-end gap-[0.05rem]">
        <button className="btn btn-ghost btn-circle">
          <LuScanLine size={23} />
        </button>
        <button className="btn btn-ghost btn-circle">
          <IoChatboxEllipsesOutline size={23} />
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <LuBell size={23} />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>

    </div>

  );
};

export default Navbar;
