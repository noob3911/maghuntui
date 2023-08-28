import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { url } from "@/constants";
import TableLoader from "./Loader";
import { ImMagnet } from "react-icons/im";
import { IoMdCopy } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
// import {ReactTooltip} from "react-tooltip";

const Hero = () => {
   const [torData, setTorData] = useState([]);
   const [search, setSearch] = useState("");
   const [searched, setSearched] = useState(false);
   const [isLoading, setLoading] = useState(false);

   const magnetRef = useRef(null);

   const handleMagnetCopy = () => {
      const magnetCopy = magnetRef.current.href;

      if (magnetCopy) {
         const textarea = document.createElement("textarea");
         textarea.value = magnetCopy;
         document.body.appendChild(textarea);
         textarea.select();

         try {
            document.execCommand("copy");
            toast.success("Magnet Copied");
         } catch (error) {
            console.error("Failed to copy:", error);
         }

         document.body.removeChild(textarea);
      }
   };

   const handleSearch = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
         const data = await axios.get(`${url}/api?search=${search}`);
         const response = await data.data;
         setTorData(response);
         setSearched(true);
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   return (
      <>
         <section className="flex items-center flex-col justify-center w-full bg-zinc-800  min-h-screen pb-44 ">
            <div className="flex items-center flex-col justify-center pt-24 ">
               <h1 className="text-4xl font-palanquin text-white pb-10">Magnet Hunt</h1>
               <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center ">
                  <div className="relative ">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-6 w-6 text-gray-400"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.2-5.2" />
                           <circle cx="10" cy="10" r="7" />
                        </svg>
                     </div>
                     <input
                        type="text"
                        className="rounded-full font-montserrat pl-12 pr-4 py-2 bg-transparent text-slate-600 border border-gray-300 focus:outline-none focus:border-blue-500 text-xl"
                        placeholder="Search..."
                        onChange={handleSearch}
                     />
                  </div>
                  <button
                     type="submit"
                     className="w-32 my-4 text-white sm:w-36 flex items-center text-xs justify-center text-center  h-9 rounded-full  hover:brightness-110 bg-opacity-0 shadow-sm  mt-4 bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-800"
                  >
                     {isLoading ? "Loading.." : "Search"}
                  </button>
               </form>
            </div>
            <div className="max-w-full md:flex-wrap">
               {searched && !isLoading && torData !== null ? (
                  torData.length > 0 ? (
                     <div className="max-w-full flex flex-wrap justify-center ">
                        {torData?.length
                           ? torData.map((torrent, index) => (
                                <div
                                   className="bg-zinc-700 font-montserrat shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-3"
                                   key={index}
                                >
                                   <div className="px-4 py-5">
                                      <h2 className="text-sm font-semibold text-white mb-2">{torrent.Name}</h2>
                                   </div>
                                   <div className="px-5 flex items-center justify-between pb-2">
                                      <p className="text-white text-sm ">Size: {torrent.Size}</p>
                                      <a href={torrent.Magnet} ref={magnetRef} className="text-indigo-600 hover:underline text-sm mb block"></a>
                                      <button onClick={handleMagnetCopy} className="flex items-center text-white justify-center gap-1 ">Magnet 
                                      <ImMagnet  className="text-red-600 cursor-pointer "></ImMagnet></button>
                                   </div>
                                   <div className="px-5 py-1 bg-zinc-700 flex items-center justify-between mb-2">
                                      <p className="text-sm text-white">Seeds: <span className="text-green-500 font-bold">{torrent.Seeders}</span></p>
                                      <p className="text-sm text-white">Leech: {torrent.Leechers}</p>
                                   </div>
                                </div>
                             ))
                           : null}
                     </div>
                  ) : (
                     <div className="text-center text-white text-sm py-4">Nothing Found</div>
                  )
               ) : isLoading ? (
                  <div className="flex flex-wrap items-center justify-center ">
                     {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                        <div className="bg-zinc-700 shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-3" key={index}>
                           <TableLoader />
                        </div>
                     ))}
                  </div>
               ) : null}
            </div>
            <Toaster
               containerStyle={{
                  bottom: 90,
               }}
               position="bottom-center"
               gutter={24}
               reverseOrder={false}
            />
         </section>
      </>
   );
};
export default Hero;
