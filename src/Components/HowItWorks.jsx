import React from "react";

const cards = [
  {
    icon: "walleticon.png",
    title: "Set up your wallet",
    disc: `Once you’ve set up your wallet of choice, connect it to 
           OpenSea by clicking the NFT Marketplace in the top right corner. 
           Learn about the wallets we support.`,
  },
  {
    icon: "windowicon.png",
    title: "Create your collection",
    disc: `Click Create and set up your collection. Add social links, 
           a description, profile & banner images, and set a secondary sales fee.`,
  },
  {
    icon: "nfticon.png",
    title: "Add your NFTs",
    disc: `Upload your work (image, video, audio, or 3D art), add a title and description, 
           and customize your NFTs with properties, stats, and unlockable content.`,
  },
  {
    icon: "shopicon.png",
    title: "List them for sale",
    disc: `Choose between auctions, fixed-price listings, 
           and declining-price listings. You choose how
           you want to sell your NFTs!`,
  },
];

function HowItWorks() {
  return (
    <div>
      <div className="text-[#fff] pt-20">
            <h2 className=" mx-28 relative font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:hidden xl:block hidden">
            How It Works{" "}
              <span className="border-t-4 border-indigo-500 absolute top-3 ml-4">
                --------
              </span>
            </h2>
        <div className="lg:flex justify-between w-[90%] mx-auto  pt-3">
          <h1 className=" text-2xl md:text-4xl font-bold mb-5 px-10">
            Create and sell your NFTs
          </h1>
        </div>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-[85%] mx-auto p-2 pt-9">
          {cards.map((cards, index) => (
            <div  key={index} >
              <div>
                <img src={cards.icon} alt="" className="w-16" />
              </div>
              <div className="pt-2">
                <h2 className="text-xl font-bold mt-5 mb-5">{cards.title}</h2>
                <p className="text-slate-400 mb-5">{cards.disc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;