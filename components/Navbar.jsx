import React from "react";
import { FaMagnet } from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/Maghunt.png";
import { navlinks } from "@/constants";
import { BiMenuAltRight } from "react-icons/bi";
import { CgMagnet } from "react-icons/cg";
const Navbar = () => {
   return (
      <header className="padding-x py-4 fixed z-100 bg-blue-600 w-full">
         <nav className=" flex bg-blue-600 justify-between items-center max-container font-palanquin">
            <a href="/">
               <div className="flex items-center justify-end gap-[0.20rem]">
                  <CgMagnet className="text-white"  size={32}/>
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
               <BiMenuAltRight className="" size={30} />
            </div>
         </nav>
      </header>
   );
};
export default Navbar;
