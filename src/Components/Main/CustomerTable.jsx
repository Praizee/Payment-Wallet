import React from 'react'
import { FcPrint } from "react-icons/fc";
import Cheque from "../../assets/cheque.png"
import VisaRed from "../../assets/visa-red.png"
import VisaBlue from "../../assets/visa-blue.png"
import MasterCard from "../../assets/mastercard.png"
import Wise from "../../assets/wise.png"


export const CustomerTable = () => {
    return (
        <section>
            <div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                    Customer
                                </th>
                                <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                    Transaction ID.
                                </th>
                                <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                    Channel
                                </th>
                                <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                    Amount
                                </th>
                                <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                    {/* empty for the print icons */}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 text-[0.8375rem] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Jenkins International Ltd.
                                </th>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    029830192
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    <img src={Cheque} className='' alt='cheque' />
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    - ₦1,350
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    27/11/2022  4:13:00 PM
                                </td>
                                <td className="px-5 py-4 ">
                                    <p className='text-[0.8375rem] p-1 rounded-md text-[#FFCF5C] bg-[#FFCF5C]/10'>
                                        Pending
                                    </p>
                                </td>
                                <td className="px-4 py-4 text-[0.8375rem]">
                                    <FcPrint className="h-6 w-6 cursor-pointer" title='Print' />
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 text-[0.8375rem] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Travail Clubs International
                                </th>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    924568334
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    <img src={VisaRed} className='' alt='visa-red' />
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    + ₦18,125
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    23/10/2022  3:45:59 PM
                                </td>
                                <td className="px-5 py-4 ">
                                    <p className='text-[0.8375rem] p-1 rounded-md text-[#1CA78B] bg-[#F0F4F9]'>
                                        Approved
                                    </p>
                                </td>
                                <td className="px-4 py-4 text-[0.8375rem]">
                                    <FcPrint className="h-6 w-6 cursor-pointer" title='Print' />
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 text-[0.8375rem] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Google LLC
                                </th>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    394012490
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    <img src={VisaBlue} className='' alt='visa-blue' />
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    - ₦1,350
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    27/9/2022  7:27:39 AM
                                </td>
                                <td className="px-5 py-4 ">
                                    <p className='text-[0.8375rem] p-1 rounded-md text-[#1CA78B] bg-[#F0F4F9]'>
                                        Approved
                                    </p>
                                </td>
                                <td className="px-4 py-4 text-[0.8375rem]">
                                    <FcPrint className="h-6 w-6 cursor-pointer" title='Print' />
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 text-[0.8375rem] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Meta Corps
                                </th>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    782019231
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    <img src={MasterCard} className='' alt='mastercard' />
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    + ₦6,180
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    30/8/2022  11:01:53 PM
                                </td>
                                <td className="px-5 py-4 ">
                                    <p className='text-[0.8375rem] p-1 rounded-md text-[#1CA78B] bg-[#F0F4F9]'>
                                        Approved
                                    </p>
                                </td>
                                <td className="px-4 py-4 text-[0.8375rem]">
                                    <FcPrint className="h-6 w-6 cursor-pointer" title='Print' />
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 text-[0.8375rem] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Brumpost Media LLC
                                </th>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    112901928
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    <img src={Wise} className='' alt='Wise' />
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    + ₦39,000
                                </td>
                                <td className="px-6 py-4 text-[0.8375rem]">
                                    28/7/2022  1:00:32 PM
                                </td>
                                <td className="px-5 py-4 ">
                                    <p className='text-[0.8375rem] p-1 rounded-md text-[#1CA78B] bg-[#F0F4F9]'>
                                        Approved
                                    </p>
                                </td>
                                <td className="px-4 py-4 text-[0.8375rem]">
                                    <FcPrint className="h-6 w-6 cursor-pointer" title='Print' />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* table pagination */}
                    <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
                        <span className="text-sm font-normal px-6 text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-5</span> of <span className="font-semibold text-gray-900 dark:text-white">500</span></span>
                        <ul className="inline-flex -space-x-px text-sm h-8">
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </section>
    )
}


// Basic Table

{/* <table class="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table> */}