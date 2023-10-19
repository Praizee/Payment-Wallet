import React, { useState } from "react";
import AvailableBalance from "../../Components/Main/AvailableBalance";
import HeaderGraph from "../../Components/Main/HeaderGraph";
import Statistics from "../../Components/Main/Statistics";
import { CustomerTable } from "../../Components/Main/CustomerTable";

const Dashboard = () => {

  return (
    <section className="text-black bg-[#F6F6F6]">
      <div className="container pt-24 pb-16 px-">

        <div className="flex gap-4 justify-betwee relative">

          <div className="relative space-y-4">
            <h1 className="text-[1.2rem] text-[#2E2E3A] leading-tight font-bold">
              Good day, &nbsp;
              <span className="text-blue-500 text-[1.2rem]">
                User
              </span>
            </h1>

            <h1 className="text-[2rem] text-[#2E2E3A] leading-normal font-bold">
              Overview
            </h1>

            <div className="laptop:flex gap-4 justify-between">
              {/* <HeaderGraph /> */}
              <AvailableBalance />
            </div>

            <div className="">
              <Statistics />
            </div>

            <div className="overflow-x-auto max-w-[20.5rem] min-w-[19.5rem] tablet:max-w-[35.5rem] laptop:max-w-full">
              <CustomerTable />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Dashboard;
