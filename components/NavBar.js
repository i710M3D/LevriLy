import Image from 'next/image'
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineMenu } from 'react-icons/ai'
import { useState, useEffect } from 'react';
import { HiLocationMarker } from "react-icons/hi";



export default function NavBar(params) {

    const [scrolled, setScrolled] = useState({
        nav:false,
        search:false
    });

    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
        setScrolled({
          nav: window.scrollY !== 0,
          search: window.scrollY > 305,
        });
      };



    return (
        <>
            <div className={`flex h-20 w-full justify-between  items-center z-40 fixed ${ scrolled.nav ? 'bg-white sm:ease-in duration-200 z-40 border-b-4' : 'bg-transparent ease-in duration-100'}`}>


                <div className={`${scrolled.search ? 'hidden md:flex' :'flex'} items-center ml-4 cursor-pointer   ${scrolled.nav ? 'text-black' : 'text-white'}`}>
                    <AiOutlineMenu className=' sm:h-6 sm:w-6 h-4 w-4 hover:scale-110' />
                    <div className='text-2xl sm:text-4xl pl-3 font-mon font-bold '>
                        <span className='text-black tracking-wide'>L</span><span className='tracking-wide'>evrily</span>
                    </div>
                </div>

                <div className={`border-2 w-[80%] mx-auto md:w-[40%] lg:w-[60%] h-[70%]  items-center rounded-sm bg-gray-200 relative cursor-pointer ${scrolled.search ? ' flex':'hidden'} `}>
                    <HiLocationMarker className="absolute opacity-80  h-6 w-6 pl-1" />
                    <input type="text" placeholder='Delivery Address' className=' bg-transparent focus:outline-none w-full rounded-full pl-7  text-black/70 font-mono sm:text-lg text-sm' />
                </div>

                <div className={`${scrolled.search ? 'hidden md:flex' :'flex'} text-[10px] sm:text-base items-center justify-between w-32 sm:w-48 mr-4 sm:mr-8 font-mon font-medium sm:font-semibold`}>

                    <div className='cursor-pointer hover:scale-110  '>
                        <span className='bg-black py-[10px] px-3 rounded-full text-white'>sign up</span>
                    </div>

                    <div className=' flex bg-white rounded-full p-2 items-center hover:scale-110 shadow-lg'>
                        <BsPersonFill className='h-[12px] w-[12px] sm:h-4 sm:w-4' />
                        <span>Log in</span>
                    </div>

                </div>

            </div>
        </>
    );
};

