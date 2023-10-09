import React from "react";
import './styles.css';
import CopyButton from "./CopyButton";
import Balance from "./Balance";

const AvailableBalance = () => {
    return (
        <section className="">
            <div className="">
                <div className="balance w-[20.5rem] px-5 py-6 leading-normal space-y-2 rounded-[1.2rem] text-white">
                    <p className="text-[0.75rem] font-semibold">
                        AVAILABLE BALANCE
                    </p>
                    <div>
                        <Balance initialBalance={123456} />
                        <span>
                            <p className="text-[0.75rem] font-medium">
                                *This balance is available to withdraw
                            </p>
                            <hr className="my-4 " />
                            <p className="text-[0.75rem] font-semibold">
                                LEDGER BALANCE
                            </p>
                        </span>
                        <Balance initialBalance={654321} />
                    </div>
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
