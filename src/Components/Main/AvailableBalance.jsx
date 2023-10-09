import React from "react";
import './styles.css';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import CopyButton from "./CopyButton";

const AvailableBalance = () => {
    return (
        <section className="">
            <div className="">
                <div className="balance w-[20.5rem] px-5 py-6 leading-normal space-y-2 rounded-[1.2rem] text-white">
                    <p className="text-[0.75rem] font-semibold">
                        AVAILABLE BALANCE
                    </p>
                    <span className="flex space-x-3 text-[3.125rem]">
                        {/* show */}
                        <span className="py-6">
                            <AiOutlineEye size={30} title="Show" />
                        </span>
                        {/* hide */}
                        <span className="py-6">
                            <AiOutlineEyeInvisible size={30} title="Hide" />
                        </span>
                        <h1>
                            ₦#,###
                        </h1>
                    </span>
                    <span>
                        <p className="text-[0.75rem] font-medium">
                            *This balance is available to withdraw
                        </p>
                        <hr className="my-4 " />
                        <p className="text-[0.75rem] font-semibold">
                            LEDGER BALANCE
                        </p>
                    </span>
                    <span className="flex space-x-3 text-[2.1875rem]">
                        {/* show */}
                        <span className="py-4">
                            <AiOutlineEye size={25} title="Show" />
                        </span>
                        {/* hide */}
                        <span className="py-4">
                            <AiOutlineEyeInvisible size={25} title="Hide" />
                        </span>
                        <h1>
                            ₦#,###
                        </h1>
                    </span>
                    <select name="bank" id="bank"
                        className="text-[0.9375rem] w-full leading-normal font-semibold p-2 bg-transparent border border-white rounded-lg">
                        <option value={"UBA Bank PLC"}
                            className="text-[black]">
                            UBA Bank PLC
                        </option>
                        <option value={"Wema Bank PLC"}
                            className="text-[black]">
                            Wema Bank PLC
                        </option>
                        <option value={"Zenith Bank PLC"}
                            className="text-[black]">
                            Zenith Bank PLC
                        </option>
                    </select>

                    <span className="flex justify-between font-normal bg-[#2488FF80] p-2 rounded-lg">
                        {/* text to be copied */}
                        <span className="flex space-x-4 py-2">
                            <p className="text-[0.75rem] font-semibold">
                                8452099123
                            </p>
                            <p className="text-[0.75rem]">
                                — &nbsp; UBA Bank
                            </p>
                        </span>

                        {/* Include the CopyButton component here */}
                        <CopyButton />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default AvailableBalance;
