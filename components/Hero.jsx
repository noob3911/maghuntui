const Hero = () => {
   return (
      <>
         <section className="flex items-center flex-col justify-center w-full bg-zinc-800 px-4 min-h-screen pb-44 ">
            <div className="flex items-center flex-col justify-center pt-24 ">
               <h1 className="text-5xl font-palanquin text-white">Magnet Hunt</h1>
               <div className="py-10 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.2-5.2" />
                        <circle cx="10" cy="10" r="7" />
                     </svg>
                  </div>
                  <input
                     type="text"
                     className="rounded-full font-montserrat pl-12 pr-4 py-2 bg-transparent text-slate-600 border border-gray-300 focus:outline-none focus:border-blue-500 text-xl"
                     placeholder="Search..."
                  />
               </div>
            </div>
            <div className="content">
               {[0].map((item) => (
                  <h2>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur expedita id totam, qui dolore distinctio quos, saepe ratione
                     repudiandae iste magni! Pariatur earum, cum officia necessitatibus asperiores rerum? Laborum assumenda veritatis nihil placeat
                     expedita.
                  </h2>
               ))}
            </div>
         </section>
      </>
   );
};
export default Hero;
