import React, { useState } from "react";
// Unused
// import { NavbarData } from "./NavbarData"
import { FiMenu } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LuScanLine } from "react-icons/lu";
import UserPic from "../../assets/Userpic.png"


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

      <div className="navbar-end gap-">
        <div className="gap-[0.05rem]">
          <button className="btn btn-ghost btn-circle" title="Scan QR Code">
            <LuScanLine size={23} />
          </button>
          <button className="btn btn-ghost btn-circle" title="Get Help">
            <IoChatboxEllipsesOutline size={23} />
          </button>
          <button className="btn btn-ghost btn-circle" title="Notifications">
            <div className="indicator">
              <LuBell size={23} />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>

        <div className="">
          <span className="flex mx-4 gap-2 justify-between">
            <span className="py-1">
              <img src={UserPic} alt="User-pic" className="rounded-full" />
            </span>

            <span>
              <h2 className="text-[#2E2E3A] text-[0.875rem] font-semibold">
                Steve Ade
              </h2>
              <p className="text-[#9A9AAF] text-[0.75rem] font-light">
                Admin
              </p>
            </span>
          </span>
        </div>
      </div>

    </div>

  );
};

export default Navbar;
