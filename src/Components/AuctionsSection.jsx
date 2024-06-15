'use client'
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const SwiperSlider =() => {
//   return (
//     <div className='text-white'>
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//     </Swiper>

//     </div>
// )};
// export SwiperSlider
//////////////////////////////////////////

import React from "react";
import { Swiper , SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Pagination } from "swiper/modules";

const LiveAuction = () => {
  return (
    <>
     <div className="container m-0 px-4 md:px-10  xl:px-28 pt-20 md:pt-32 xl:mx-0 max-w-7xl">

             <h2 className=" relative font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
             Auctions{" "}
              <span className="border-t-4 border-indigo-500 absolute top-3 ml-4">
                --------
              </span>
              </h2>

          <div className="text-[#fff]">
            <div className="lg:flex justify-between w-[98%]  my-5">
               <h1 className=" text-2xl md:text-4xl font-bold mb-5">
               Live Auctions
               </h1>
                <a
                href="#"
                className="text-sm md:text-lg font-bold hover:text-blue-800"
                >
                Explore More <span>&rarr;</span>
                </a>
            </div>
          </div>
        <Swiper
        breakpoints={{
          1024: {
            width: 1220,
            slidesPerView: 4,
          },
          768: {
            width: 900,
            slidesPerView: 3,
          },
          425: {
            width: 250,
            slidesPerView: 1,
          },
          375: {
            width: 350,
            slidesPerView: 1,
          },
          320: {
            width: 290,
            slidesPerView: 1,
          },
        }}
        spaceBetween={40}
        modules={[Navigation, Scrollbar, A11y]}
        slidesPerView={4}
        navigation
        scrollbar={{ draggable: true }}
        className="mySwiper xl:mx-20 xl:py-20 lg:py-20 lg:mx-24 mx-1 md:px-5 md:pt-5 pt-5 text-white"
        >


          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
             <img
              src="auction-1.jpg"
              alt=""
              className="mx-auto md:mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Arts</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="avatar4.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>MKHBolds</h1>
              </div>
            </div>
            <div className="flex justify-between md:mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#212529] rounded-xl p-7 text-center">
            
                <img
                  src="auction-4.jpg"
                  alt=""
                  className="mx-auto md:mb-5 mb-2 rounded-md"
                />

              <div className="flex md:gap-3 gap-2 text-xs">
                <p>DATE <br /> <strong>23</strong> </p>
                <p>HOUR <br /> <strong>04</strong></p>
                <p>MINUTE <br /> <strong>55</strong></p>
                <p>SECONDS <br /><strong>60</strong></p>
              </div>

              <h1 className="md:mb-3 mb-1 text-2xl font-semibold py-2">Virtual Worlds</h1>

              <div className="flex items-center" >
                <img src="auction-4.jpg" className="rounded-full w-16 h-16"/>
                 <h1 className="ml-2 font-semibold">@Richard</h1>
              </div>
            
              <div className="flex justify-between md:mt-5 mt-2 font-semibold w-56">
               <h3>1.5 BNB</h3>
               <h3>1 of 1</h3>
              </div>

          </SwiperSlide>

          <SwiperSlide className="bg-[#212529] rounded-xl p-7 text-center">
                
                <img
                  src="auction-1.jpg"
                  alt=""
                  className="mx-auto mb-5 rounded-md"
                />

              <div className="flex md:gap-3 gap-2 text-xs">
                <p>DATE <br /> <strong>23</strong> </p>
                <p>HOUR <br /> <strong>04</strong></p>
                <p>MINUTE <br /> <strong>55</strong></p>
                <p>SECONDS <br /><strong>60</strong></p>
              </div>

              <h1 className="md:mb-3 mb-1 text-2xl font-semibold py-2">Virtual Worlds</h1>

              <div className="flex items-center" >
                <img src="avatar6.jpg" className="rounded-full w-16 h-16"/>
                <h1 className="ml-2 font-semibold">@Richard</h1>
              </div>
            
              <div className="flex justify-between md:mt-5 mt-2 font-semibold w-56">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
              </div>

          </SwiperSlide>

          <SwiperSlide className="bg-[#212529] rounded-xl p-7 text-center">
                
                <img
                  src="auction-2.jpg"
                  alt=""
                  className="mx-auto mb-5 rounded-md"
                />

              <div className="flex md:gap-3 gap-2 text-xs">
                <p>DATE <br /> <strong>23</strong> </p>
                <p>HOUR <br /> <strong>04</strong></p>
                <p>MINUTE <br /> <strong>55</strong></p>
                <p>SECONDS <br /><strong>60</strong></p>
              </div>

              <h1 className="md:mb-3 mb-1 text-2xl font-semibold py-2">Virtual Worlds</h1>

              <div className="flex items-center" >
                <img src="avatar4.jpg" className="rounded-full w-16 h-16"/>
                <h1 className="ml-2 font-semibold">@Richard</h1>
              </div>
            
              <div className="flex justify-between md:mt-5 mt-2 font-semibold w-56">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
              </div>

          </SwiperSlide>

          <SwiperSlide className="bg-[#212529] rounded-xl p-7 text-center">
                
                <img
                  src="auction-1.jpg"
                  alt=""
                  className="mx-auto mb-5 rounded-md"
                />

              <div className="flex md:gap-3 gap-2 text-xs">
                <p>DATE <br /> <strong>23</strong> </p>
                <p>HOUR <br /> <strong>04</strong></p>
                <p>MINUTE <br /> <strong>55</strong></p>
                <p>SECONDS <br /><strong>60</strong></p>
              </div>

              <h1 className="md:mb-3 mb-1 text-2xl font-semibold py-2">Virtual Worlds</h1>

              <div className="flex items-center" >
                <img src="avatar4.jpg" className="rounded-full w-16 h-16"/>
                <h1 className="ml-2 font-semibold">@Richard</h1>
              </div>
            
              <div className="flex justify-between md:mt-5 mt-2 font-semibold w-56">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
              </div>

          </SwiperSlide>

          <SwiperSlide className="bg-[#212529] rounded-xl p-7 text-center">
                
                <img
                  src="auction-2.jpg"
                  alt=""
                  className="mx-auto mb-5 rounded-md"
                />

              <div className="flex md:gap-3 gap-2 text-xs">
                <p>DATE <br /> <strong>23</strong> </p>
                <p>HOUR <br /> <strong>04</strong></p>
                <p>MINUTE <br /> <strong>55</strong></p>
                <p>SECONDS <br /><strong>60</strong></p>
              </div>

              <h1 className="md:mb-3 mb-1 text-2xl font-semibold py-2">Virtual Worlds</h1>

              <div className="flex items-center" >
                <img src="avatar5.jpg" className="rounded-full w-16 h-16"/>
                <h1 className="ml-2 font-semibold">@Richard</h1>
              </div>
            
              <div className="flex justify-between md:mt-5 mt-2 font-semibold w-56">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
              </div>

          </SwiperSlide>

          <SwiperSlide className="bg-[#212529] rounded-xl p-7 text-center">
                
                <img
                  src="auction-3.jpg"
                  alt=""
                  className="mx-auto mb-5 rounded-md"
                />

              <div className="flex md:gap-3 gap-2 text-xs">
                <p>DATE <br /> <strong>23</strong> </p>
                <p>HOUR <br /> <strong>04</strong></p>
                <p>MINUTE <br /> <strong>55</strong></p>
                <p>SECONDS <br /><strong>60</strong></p>
              </div>

              <h1 className="md:mb-3 mb-1 text-2xl font-semibold py-2">Virtual Worlds</h1>

              <div className="flex items-center" >
                <img src="avatar6.jpg" className="rounded-full w-16 h-16"/>
                <h1 className="ml-2 font-semibold">@Richard</h1>
              </div>
            
              <div className="flex justify-between md:mt-5 mt-2 font-semibold w-56">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
              </div>

          </SwiperSlide>

          <SwiperSlide className="bg-[#212529] rounded-xl p-7 text-center">
                
                <img
                  src="auction-4.jpg"
                  alt=""
                  className="mx-auto mb-5 rounded-md"
                />

              <div className="flex md:gap-3 gap-2 text-xs">
                <p>DATE <br /> <strong>23</strong> </p>
                <p>HOUR <br /> <strong>04</strong></p>
                <p>MINUTE <br /> <strong>55</strong></p>
                <p>SECONDS <br /><strong>60</strong></p>
              </div>

              <h1 className="md:mb-3 mb-1 text-2xl font-semibold py-2">Virtual Worlds</h1>

              <div className="flex items-center" >
                <img src="avatar3.jpg" className="rounded-full w-16 h-16"/>
                <h1 className="ml-2 font-semibold">@Richard</h1>
              </div>
            
              <div className="flex justify-between md:mt-5 mt-2 font-semibold w-56">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
              </div>

          </SwiperSlide>

          <SwiperSlide className="bg-[#212529] rounded-xl p-7 text-center">
                
                <img
                  src="auction-1.jpg"
                  alt=""
                  className="mx-auto mb-5 rounded-md"
                />

              <div className="flex md:gap-3 gap-2 text-xs">
                <p>DATE <br /> <strong>23</strong> </p>
                <p>HOUR <br /> <strong>04</strong></p>
                <p>MINUTE <br /> <strong>55</strong></p>
                <p>SECONDS <br /><strong>60</strong></p>
              </div>

              <h1 className="md:mb-3 mb-1 text-2xl font-semibold py-2">Virtual Worlds</h1>

              <div className="flex items-center" >
                <img src="avatar6.jpg" className="rounded-full w-16 h-16"/>
                <h1 className="ml-2 font-semibold">@Richard</h1>
              </div>
            
              <div className="flex justify-between md:mt-5 mt-2 font-semibold w-56">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
              </div>

          </SwiperSlide>

          <SwiperSlide className="bg-[#212529] rounded-xl p-7 text-center">
                
                <img
                  src="auction-1.jpg"
                  alt=""
                  className="mx-auto mb-5 rounded-md"
                />

              <div className="flex md:gap-3 gap-2 text-xs">
                <p>DATE <br /> <strong>23</strong> </p>
                <p>HOUR <br /> <strong>04</strong></p>
                <p>MINUTE <br /> <strong>55</strong></p>
                <p>SECONDS <br /><strong>60</strong></p>
              </div>

              <h1 className="md:mb-3 mb-1 text-2xl font-semibold py-2">Virtual Worlds</h1>

              <div className="flex items-center" >
                <img src="avatar4.jpg" className="rounded-full w-16 h-16"/>
                <h1 className="ml-2 font-semibold">@Richard</h1>
              </div>
            
              <div className="flex justify-between md:mt-5 mt-2 font-semibold w-56">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
              </div>

          </SwiperSlide>

          <SwiperSlide className="bg-[#212529] rounded-xl p-7 text-center">
                
                <img
                  src="auction-4.jpg"
                  alt=""
                  className="mx-auto mb-5 rounded-md"
                />

              <div className="flex md:gap-3 gap-2 text-xs">
                <p>DATE <br /> <strong>23</strong> </p>
                <p>HOUR <br /> <strong>04</strong></p>
                <p>MINUTE <br /> <strong>55</strong></p>
                <p>SECONDS <br /><strong>60</strong></p>
              </div>

              <h1 className="md:mb-3 mb-1 text-2xl font-semibold py-2">Virtual Worlds</h1>

              <div className="flex items-center" >
                <img src="auction-4.jpg" className="rounded-full w-16 h-16"/>
                <h1 className="ml-2 font-semibold">@Richard</h1>
              </div>
            
              <div className="flex justify-between md:mt-5 mt-2 font-semibold w-56">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
              </div>

          </SwiperSlide>
            
          
        </Swiper>
      </div>
    </>
  );
};
export default LiveAuction;
