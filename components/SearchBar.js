import Image from 'next/image'
import { HiLocationMarker } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

export default function SearchBar(params) {
    return (
        <div className='mx-auto sm:flex sm:items-center'>
            <div className='flex items-center rounded-lg  bg-gray-100 my-5 px-2 relative mx-auto sm:ml-auto w-64  sm:mr-2 sm:w-[50%] py-3 cursor-pointer sm:h-14 sm:rounded-sm  '>
                <HiLocationMarker className="absolute opacity-80  h-6 w-6 sm:h-7 sm:w-7" />
                <input type="text" placeholder='Delivery Address' className=' bg-transparent focus:outline-none w-full rounded-full pl-6 sm:pl-8 text-black/70 font-mono sm:text-lg text-sm' />
            </div>
            <span className=' cursor-pointer z-10 w-64 sm:w-40 md:w-52 mx-auto sm:mr-auto sm:ml-0 bg-black rounded-lg sm:rounded-md flex items-center justify-center text-xl font-pop font-base text-gray-50 p-2 sm:h-14 hover:bg-gray-800' >Place Order</span>
        </div>
    );
};
