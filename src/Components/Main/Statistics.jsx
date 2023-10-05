import React, { useState } from "react";

const Statistics = () => {

    return (
        <section className="text-black">
            <div className="">

                <div className="relative grid laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-12">

                    <div className="border bg-white p-4 rounded-lg">
                        <p className="">
                            ALL CUSTOMERS
                        </p>
                        <span className="flex gap-4">
                            <h2 className="">
                                21,224
                            </h2>
                            <p className="text-[#FD4438]">
                                ↓ 0.7%
                            </p>
                        </span>
                        <span className="flex space-x-1">
                            <p className="text-[#00D88A]">
                                +17 New
                            </p>
                            <p>
                                customers compared to yesterday
                            </p>
                        </span>
                    </div>

                    <div className="border bg-white p-4 rounded-lg">
                        <p className="">
                            TRANSACTIONS PROCESSED
                        </p>
                        <span className="flex gap-4">
                            <h2 className="">
                                129324
                            </h2>
                            <p className="text-[#FD4438]">
                                ↓ 8.5%
                            </p>
                        </span>
                        <span className="flex space-x-1">
                            <p>compared to </p>
                            <p className="text-[#00D88A]">
                                3901
                            </p>
                            <p>last month</p>
                        </span>
                    </div>

                    <div className="border bg-white p-4 rounded-lg">
                        <p className="">
                            ALL CUSTOMERS
                        </p>
                        <span className="flex gap-4">
                            <h2 className="">
                                21,224
                            </h2>
                            <p className="text-[#FD4438]">
                                ↓ 0.7%
                            </p>
                        </span>
                        <span className="flex space-x-1">
                            <p className="text-[#00D88A]">
                                +17 New
                            </p>
                            <p>
                                customers compared to yesterday
                            </p>
                        </span>
                    </div>

                </div>


            </div>
        </section>
    );
};

export default Statistics;
