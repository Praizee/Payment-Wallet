import React, { useState } from "react";
import { motion } from "framer-motion";
import AvailableBalance from "../Components/Main/AvailableBalance";
import HeaderGraph from "../Components/Main/HeaderGraph";
import Statistics from "../Components/Main/Statistics";
import { SidebarWithSearch } from "../Components/SideBarMenu/SideBarMenu";
import { CustomerTable } from "../Components/Main/CustomerTable";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Dashboard = () => {

  return (
    <section className="text-black bg-[#F6F6F6]">
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >

        <div className="container pt-24 pb-16 laptop:mr-[rem]">

          <div className="flex gap-4 justify-betwee relative">

            <div className="">
              <SidebarWithSearch />
            </div>

            <div className="relative space-y-4">
              <h1 className="text-[2.5rem] text-[#2E2E3A] leading-normal font-bold">
                Overview
              </h1>

              <div className="laptop:flex gap-4 justify-between">
                <HeaderGraph />
                <AvailableBalance />
              </div>

              <div className="">
                <Statistics />
              </div>

              <div className="">
                <CustomerTable />
              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Dashboard;
