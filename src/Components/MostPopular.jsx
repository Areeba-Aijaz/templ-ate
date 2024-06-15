import React from "react";

const cards = [
  {
    bgImg: "card1.jpg",
    imgSrc: "avatar3.jpg",
    title: "Virtual Worlds",
    coins: "ERC-729",
  },
  {
    bgImg: "card2.jpg",
    imgSrc: "avatar4.jpg",
    title: "Digital Arts",
    coins: "ERC-522",
  },
  {
    bgImg: "card3.jpg",
    imgSrc: "avatar6.jpg",
    title: "Sports",
    coins: "ERC-495",
  },
  {
    bgImg: "card4.jpg",
    imgSrc: "avatar6.jpg",
    title: "Photography",
    coins: "ERC-873",
  },
  {
    bgImg: "card5.jpg",
    imgSrc: "avatar5.jpg",
    title: "Trading Cards",
    coins: "ERC-397",
  },
  {
    bgImg: "card6.jpg",
    imgSrc: "avatar6.jpg",
    title: "Walking on Air",
    coins: "ERC-403",
  },
  {
    bgImg: "card7.jpg",
    imgSrc: "avatar3.jpg",
    title: "Domain Names",
    coins: "ERC-687",
  },
  {
    bgImg: "card1.jpg",
    imgSrc: "avatar4.jpg",
    title: "Collectibles",
    coins: "ERC-972",
  },
];

function MostPopular() {
  return (
    <div>

      <div className="text-[#fff]">
      <h2 className=" relative md:pl-16 pl-10 xl:pl-28 lg:pl-24 mt-10 font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Most Popular{" "}
        <span className="border-t-4 border-indigo-500 absolute top-3 ml-4">
          --------
        </span>
        </h2>

        <div className="lg:flex justify-between w-[83%] mx-auto m-5">
          
          <h1 className=" text-2xl md:text-4xl font-bold mb-5">
            Popular Collections
          </h1>
          <a
            href="#"
            className="text-sm md:text-lg font-bold hover:text-blue-800"
          >
            Explore More <span>&rarr;</span>
          </a>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-[85%] mx-auto text-center p-2">
          {cards.map((cards, index) => (
            <div  key={index} className="p-6 rounded-lg bg-[#212529] xl:h-80 lg:h-72 md:h-80">

              <div>
                <img src={cards.bgImg} alt="" className="rounded-lg" />
              </div>

              <div>
                <img
                  src={cards.imgSrc}
                  alt=""
                  className="rounded-full w-16 mx-auto -mt-10"
                />
              </div>

              <div className="pt-2">
                <h2 className="text-lg font-semibold">{cards.title}</h2>
                <h3 className="text-slate-400">{cards.coins}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>
      
    </div>
  );
}

export default MostPopular;