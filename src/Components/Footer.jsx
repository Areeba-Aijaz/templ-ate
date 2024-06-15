import React from "react";

const Footer = () => {
  return (
    <footer class="bg-[#212529] text-center text-white lg:text-left pt-20">
      <div class=" lg:py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:px-24 md:px-16">
          <div>
            <img
              src="logo.png"
              className="mb-7 mx-auto md:mx-0"
            />
            <p className="mb-7 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              non, fugit totam vel laboriosam vitae.
            </p>

            <div className="flex gap-3 justify-center  ">
                <img src="facebook.png" width={40} className="h-10" />
                <img src="social.png"  width={40} className="h-10"  />
                <img src="telegram.png" width={40} className="h-10"   />
                <img src="twitter.png"  width={40} className="h-10"  />
            </div>
          </div>

          
          <div class="">
            <h6 class="mb-4 flex justify-center font-bold uppercase md:justify-start  text-xl">
              Useful Links
            </h6>
            <p class="mb-3">
              <a href="#">All NFTs</a>
            </p>
            <p class="mb-3">
              <a href="#">How It Works</a>
            </p>
            <p class="mb-3">
              <a href="#">Create</a>
            </p>
            <p>
              <a href="#">Explore</a>
            </p>
            <p className="mt-5">
              <a href="#">Privacy & Terms</a>
            </p>
          </div>

          <div class="">
            <h6 class="mb-4 flex justify-center font-bold uppercase md:justify-start text-xl">
              Community
            </h6>
            <p class="mb-5">
              <a href="#">Help Center</a>
            </p>
            <p class="mb-3">
              <a href="#">Partners</a>
            </p>
            <p class="mb-3">
              <a href="#">Suggestions</a>
            </p>
            <p class="mb-3">
              <a href="#">Blog</a>
            </p>
            <p>
              <a href="#">Newsletter</a>
            </p>
          </div>

          <div>
            <h6 class="mb-4 flex justify-center font-bold uppercase md:justify-start text-xl">
              Subscribe Us
            </h6>

            <p class="mb-4 flex items-center justify-center md:justify-start xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              +(323) 750-1234
            </p>
            <p class="mb-4 flex items-center justify-center md:justify-start xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              infoyour@gmail.com
            </p>
            <p class="mb-4 flex items-center justify-center md:justify-start xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-3 h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>
              374 FA Tower, William S Blvd
            </p>

            <div className=" flex items-center relative justify-between ">
            <input type="text" placeholder="info@gmail.com..." className="p-3 rounded-3xl bg-gray-900 hover:border border-black sm:hidden xl:block hidden" />
            <button> <img src="send.png"  width={50} className=" sm:hidden xl:block hidden h-12 bg-purple-950 rounded-full p-2  absolute right-5 bottom-0.5  lg:right-0 lg:bottom-0.5 md:right-5 md:bottom-0.5 " /></button>
            </div>
          
          </div>

        </div>
      </div>

      <div className="border-t-2 border-gray-500 w-[90%] mx-auto sm:hidden md:block hidden">
        <div class="px-4 py-6 md:flex md:items-center md:justify-between">
          <p class="text-lg  sm:text-center">
            ©2021 Netstrom All Rights Reserved.
          </p>
          <span className="font-semibold text-1xl md:text-3xl">www.DownloadNewTheme.com</span>
          <span class="text-lg font-semibold sm:text-center">
            Develop by Areeba Aijaz!
          </span>
        </div>
      </div> 
    </footer>
  );
};

export default Footer;