// import React from 'react'
// import Button from './Button'

// const HeroSection = () => {
//   return (
//     <div className='bg-black h-[200px] md:h-[400px] lg:h-[590px] text-white'>
//         <div className='relative'>
//          <img src="Vector8.png" alt="" className='absolute  blur-sm z-0 top-32 lg:w-[1500px] md:w-[900px] right-0' />
//         </div>

//         <div className=' absolute z-50 px-10 md:py-40 lg:py-44 flex flex-col md:gap-5 gap-2 pt-24 md:pt-16  md:px-24 lg:px-28'>

//         <h4 className='text-sm lg:text-2xl text-gray-400'>NFT marketplace</h4>

//                 <h1 className=' text-2xl md:text-5xl lg:text-8xl font-bold w-[400px] lg:w-[900px]'>
//                 Discover collect 
//                 and sell 
//                 extraordinary NFTs
//                 </h1>

//                 <h4 className='text-sm lg:text-2xl text-gray-400'>Explore on the worlds best & largest NFT marketplace</h4>

//                 <div className='md:w-80  flex gap-2'>
//                 <Button />
//                 <Button />
//                 </div>
                 
//         </div>

//     </div>
//   )
//   }
// export default HeroSection


///////////////////////////////////////////

import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { SiAzuredataexplorer } from "react-icons/si";

function Herosection() {
  return (
      <section className="text-white bg-heroSection-image bg-no-repeat bg-cover xl:w-[1345px] md:pt-20 pt-32  ">
        <div class="grid max-w-screen-xl md:px-16 px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-36 ">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h2 className=" py-2 relative font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              NETSTORM{" "}
              <span className="border-t-4 border-indigo-500 absolute top-3 ml-4">
                --------
              </span>
            </h2>
            <h1 class="max-w-2xl mb-5 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-7xl text-white">
              Discover, collect, <br /> and sell
              <br /> extraordinary NFTs
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl :text-gray-400">
              Explore on the world best & largest NFT marketplace
            </p>
            <a
              href="#"
              class="inline-flex items-center gap-1 justify-center mr-10 mb-5 text-white w-40 py-3 px-6 rounded-full lg:w-32 lg:py-2 lg:px-0 border-2 border-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border-none"
            >
              <SiAzuredataexplorer /> Explore
            </a>
            <a
              href="#"
              class="inline-flex items-center gap-1 justify-center text-white w-40 py-3 px-6 rounded-full lg:w-32 lg:py-2 lg:px-0 border-2 border-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border-none"
            >
              <IoCreateOutline />
              Create
            </a>
          </div>
        </div>
      </section>
  );
}

export default Herosection;

