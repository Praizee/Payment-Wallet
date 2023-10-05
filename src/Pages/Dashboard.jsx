import React, { useState } from "react";
import { motion } from "framer-motion";
import AvailableBalance from "../Components/Main/AvailableBalance";
import HeaderGraph from "../Components/Main/HeaderGraph";
import Statistics from "../Components/Main/Statistics";

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

        <div className="container pt-20 pb-16 px-4 laptop:mr-[8rem]">

          <div className="relative">
            <h1 className="text-[2.5rem] text-[#2E2E3A] leading-normal font-bold">
              Overview
            </h1>

            <div className="flex gap-10 my-4">
              <HeaderGraph />
              <AvailableBalance />
            </div>

            <div className="">
              <Statistics />
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Dashboard;
