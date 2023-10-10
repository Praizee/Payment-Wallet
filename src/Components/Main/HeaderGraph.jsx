import React, { useState } from "react";
import Graph from "../../assets/Graph.png"

const HeaderGraph = () => {

    return (
        <section className="">
            <div className="">
                {/* min-w-[43.3125rem]  */}
                {/* min-w-[28.3125rem] laptop:min-w-[39rem] */}
                <div className="p-4 tablet:max-w-[38.3125rem] w-auto  h-[24.4375rem] text-black bg-white rounded-lg">
                    <span className="flex justify-between">
                        <span>
                            <p className="text-[0.75rem] text-[#2E2E3A] leading-normal font-bold">
                                Today so far
                            </p>
                            <h1 className="text-[1.25rem] text-[#2E2E3A] leading-normal font-black">
                                ₦629,394
                            </h1>
                        </span>
                        <span className="space-x-4 rounded-xl bg-[#ECECEC]">
                            <p className="btn rounded-xl normal-case px-4 text-white bg-[#0071F2]/80 hover:bg-[#0071F2]">
                                Daily
                            </p>
                            <p className="btn rounded-xl normal-case px-4 text-black ">
                                Weekly
                            </p>
                            <p className="btn rounded-xl normal-case px-4 text-black ">
                                Monthly
                            </p>
                        </span>
                    </span>

                    <div className="flex gap-6 justify-betwee mt-10">
                        <span className="space-y-8">
                            <p className="text-[0.6875rem] font-semibold">
                                ₦700K
                            </p>
                            <p className="text-[0.6875rem] font-semibold">
                                ₦500K
                            </p>
                            <p className="text-[0.6875rem] font-semibold">
                                ₦300K
                            </p>
                            <p className="text-[0.6875rem] font-semibold">
                                ₦100K
                            </p>
                            <p className="text-[0.6875rem] font-semibold">
                                ₦50K
                            </p>
                        </span>
                        <span className="flex items-end">
                            <img src={Graph} className="" alt="graph" />
                        </span>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <span className="text-[0.6875rem] font-semibold">
                            0:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            01:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            02:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            03:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            04:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            05:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            06:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            07:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            08:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            09:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            10:00
                        </span>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default HeaderGraph;
