import React, { useState } from "react";

const HeaderGraph = () => {

    return (
        <section className="">
            <div className="">

                <div className="p-4 w-[43.3125rem] h-[24.4375rem] text-black bg-white rounded-lg">
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
                </div>


            </div>
        </section>
    );
};

export default HeaderGraph;
