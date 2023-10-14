import React from 'react'

const PinManagement = () => {
    return (
        <div className="container pt-24 laptop:mr-[rem]">
            <div className='laptop:flex gap-20 tablet:place-content-center tablet:px-10'>
                <div className='bg-white tablet:min-w-[22rem] my-10 space-y-4 tablet:my-0 px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                        Change Your Pin
                    </h1>

                    <div className=' px-4 tablet:px-0'>
                        <label htmlFor="change-old-pin" className="block text-sm font-medium text-gray-700">
                            Old Pin*
                        </label>
                        <input
                            type='password'
                            id="change-old-pin"
                            name="change-old-pin"
                            required
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className=' px-4 tablet:px-0'>
                        <label htmlFor="change-new-pin" className="block text-sm font-medium text-gray-700">
                            Enter New Pin*
                        </label>
                        <input
                            type='password'
                            id="change-new-pin"
                            name="change-new-pin"
                            required
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className=' px-4 tablet:px-0'>
                        <label htmlFor="re-enter-old-pin" className="block text-sm font-medium text-gray-700">
                            Re-Enter New Pin*
                        </label>
                        <input
                            type='password'
                            id="re-enter-old-pin"
                            name="re-enter-old-pin"
                            required
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <button
                        className="inline-block w-full my-4 rounded-md border border-blue-600 bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Change Pin
                    </button>
                </div>

                {/* reset pin */}
                <div className='bg-white tablet:min-w-[22rem] my-10 space-y-4 tablet:my-0 px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                        Reset Your Lost Pin
                    </h1>

                    <div className=' px-4 tablet:px-0'>
                        <label htmlFor="reset-password" className="block text-sm font-medium text-gray-700">
                            Enter your Password*
                        </label>
                        <input
                            type='password'
                            id="reset-password"
                            name="reset-password"
                            required
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className=' px-4 tablet:px-0'>
                        <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                            Enter New Pin*
                        </label>
                        <input
                            type='password'
                            id="Password"
                            name="password"
                            required
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className=' px-4 tablet:px-0'>
                        <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                            Re-Enter New Pin*
                        </label>
                        <input
                            type='password'
                            id="Password"
                            name="password"
                            required
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <button
                        className="inline-block w-full my-4 rounded-md border border-blue-600 bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Reset Pin
                    </button>
                </div>
                {/* end of reset pin */}


            </div>
        </div>
    )
}

export default PinManagement