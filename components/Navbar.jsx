import React, { useState, useEffect } from "react";
import { FaMagnet } from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/Maghunt.png";
import { navlinks } from "@/constants";
import { BiMenuAltRight } from "react-icons/bi";
import { CgMagnet } from "react-icons/cg";

const Navbar = () => {
   const [open, setOpen] = useState(false);

   return (
      <header className="padding-x py-2 fixed z-10 bg-blue-600 w-full">
         <nav className=" flex bg-blue-600 justify-between items-center max-container font-palanquin">
            <a href="/">
               <div className="flex items-center justify-end gap-[0.20rem]">
                  <CgMagnet className="text-white" size={32} />
                  <h2 className="font-palanquin text-3xl text-white">Maghunt</h2>
               </div>
            </a>
            <ul className="flex-2 text-white flex justify-center items-center gap-12 max-lg:hidden">
               {navlinks.map((item) => (
                  <li key={item.label}>
                     <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                        {item.label}
                     </a>
                  </li>
               ))}
            </ul>
            <div className="hidden max-lg:block">
               <BiMenuAltRight
                  onClick={() => {
                     setOpen(!open);
                  }}
                  className="text-white"
                  size={30}
               />
               {open ? (
                  <div className="flex p-6 bg-blue-500 absolute z-20 top-[3.9rem] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
                     <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navlinks.map((item) => (
                           <li className="font-pressfont font-medium cursor-pointer text-white text-[16px] text-dimWhite mb-4">
                              <a href={item.href}>{item.label}</a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ) : null}
            </div>
         </nav>
      </header>
   );
};
export default Navbar;
