import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Food from "../public/food2.png";

export default function Home() {

  useEffect(() => {
    var a = document.getElementById('anim')
    a.classList.add('sm:-translate-x-96','left-[20%]')
})
  return (
    <div className="max-w-full h-screen z-0 overflow-x-hidden">
     <div className="w-full h-screen relative overflow-hidden">
      <NavBar className="" />
        <Image
          src={Food}
          width='500'
          className="object-contain absolute sm:left-[100%] left-[20%] sm:scale-125 top-96 sm:top-[410px] lg:scale-150  md:animate-slide_in  h-[512px] -z-1  "
          id="anim"
        />
        <Image
          src="https://images.unsplash.com/photo-1617957718543-b4f74800d78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          fill
          className="object-cover 
       -z-10  "
        />
        <div className="font-pop text-2xl font-semibold w-60 sm:w-96 md:w-fit md:text-4xl lg:text-5xl sm:text-3xl sm:font-bold  flex flex-wrap mx-auto mt-40 sm:mt-56 md:mb-8 sm:mb-5">  
        <p className=""> Receive your order to your <span className="text-white">Door</span>.</p>
        </div>
        <SearchBar/>
      </div>
      <div className="w-full bg-white absolute h-screen">hhhhh</div>

      
    </div>
  );
}
