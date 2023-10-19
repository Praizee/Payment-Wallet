import React from 'react'
import { Link } from 'react-router-dom'

const Settings = () => {
    return (
        <div className="container pt-20 pb-0">

            <div className='bg-white px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                    Edit Profile
                </h1>

                <div className='py-2 space-y-2'>
                    <label htmlFor='payment-options' className='text-[0.825rem] block'>
                        Bank Name
                    </label>

                    <select name='payment-options'
                        id='payment-options' defaultValue="Zenith Bank"
                        className=' w-full p-2 text-[0.85rem] border border-gray-400 rounded-lg'>
                        <option value="">--SELECT BANK--</option>
                        <option value="Access Bank">Access Bank</option>
                        <option value="Access(Diamond) Bank">Access (Diamond) Bank</option>
                        <option value="ECO Bank">ECO Bank</option>
                        <option value="First Bank of Nigeria">First Bank of Nigeria</option>
                        <option value="FCMBank">FCMBank</option>
                        <option value="Fidelity Bank">Fidelity Bank</option>
                        <option value="GTBank">GTBank</option>
                        <option value="Heritage Bank">Heritage Bank</option>
                        <option value="Kuda Bank">Kuda Bank</option>
                        <option value="Opay">Opay</option>
                        <option value="Palmpay">PalmPay</option>
                        <option value="Polaris Bank">Polaris Bank</option>
                        <option value="Stanbic IBTC">Stanbic IBTC</option>
                        <option value="Sterling Bank">Sterling Bank</option>
                        <option value="UBA">UBA</option>
                        <option value="Union Bank">Union Bank</option>
                        <option value="Unity Bank">Unity Bank</option>
                        <option value="Wema Bank">Wema Bank</option>
                        <option value="Zenith Bank">Zenith Bank</option>
                    </select>
                </div>

                <div className='py-2 space-y-2'>
                    <label htmlFor='account-name' className='text-[0.825rem] block'>
                        Account Name
                    </label>

                    <input
                        type="text"
                        id="account-name"
                        name="account-name"
                        defaultValue="FIRST MIDDLE SURNAME "
                        // change this value to the actual value of the account name: value={}
                        className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className='py-2 space-y-2'>
                    <label htmlFor='payment-options' className='text-[0.825rem] block'>
                        Account Number*
                    </label>

                    <input
                        type="number"
                        id="FirstName"
                        name="first_name"
                        defaultValue="1234567890"
                        // change this value to the actual value of the account number: value={}
                        className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className='py-2 space-y-2'>
                    <label htmlFor='payment-options' className='text-[0.825rem] block'>
                        Current Password
                    </label>

                    <div
                        className="input font-semibold py-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                        No password set.
                    </div>
                    <p className='text-[0.8rem]'>
                        Raw passwords are not stored, so there is
                        no way to see this user’s current password.
                    </p>
                </div>

                <Link to="/reset-password"
                    className="mt-0 text-sm text-[#0071F2] font-semibold link link-hover">
                    Forgot password?
                </Link>

                <div className='flex mt-4'>
                    <button
                        className="inline-block px-6 py-3 mx-auto rounded-md border border-blue-600 bg-blue-600 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Settings
