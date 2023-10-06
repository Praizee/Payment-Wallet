import React, { useState } from "react";
import './styles.css'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";


const AvailableBalance = () => {

    return (
        <section className="">

            <div className="">
                <div className="balance p-4 leading-normal rounded-[1.2rem] text-white">
                    <p className="text-[0.75rem] font-semibold">
                        AVAILABLE BALANCE
                    </p>
                    <span className="flex space-x-3 text-[3.125rem]">
                        {/* <span className="py-6">
                            <AiOutlineEye size={30} title="Show" />
                        </span> */}
                        <span className="py-6">
                            <AiOutlineEyeInvisible size={30} title="Hide" />
                        </span>
                        <h1>
                            ₦#,###
                        </h1>
                    </span>
                    <p className="text-[0.75rem] font-medium">
                        *This balance is available to withdraw
                    </p>
                    <hr className="my-4 " />
                    <p className="text-[0.75rem] font-semibold">
                        LEDGER BALANCE
                    </p>
                    <span className="flex space-x-3 text-[2.1875rem]">
                        {/* <span className="py-6">
                            <AiOutlineEye size={30} title="Show" />
                        </span> */}
                        <span className="py-4">
                            <AiOutlineEyeInvisible size={25} title="Hide" />
                        </span>
                        <h1>
                            ₦#,###
                        </h1>
                    </span>
                </div>
            </div>

        </section >
    );
};

export default AvailableBalance;
