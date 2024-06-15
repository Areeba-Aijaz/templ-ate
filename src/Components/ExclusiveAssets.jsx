import React from "react";

const cards = [
  {
    img: "auction-1.jpg",
    title: "Walking On Air",
    owner: "Owned by Richard",
    coins: "1.5 ETH",
    rank: "1 of 1",
  },
  {
    img: "auction-2.jpg",
    title: "Walking On Air",
    owner: "Owned by Richard",
    coins: "1.5 ETH",
    rank: "1 of 2",
  },
  {
    img: "auction-3.jpg",
    title: "Walking On Air",
    owner: "Owned by Richard",
    coins: "1.5 ETH",
    rank: "1 of 3",
  },
  {
    img: "auction-4.jpg",
    title: "Walking On Air",
    owner: "Owned by Richard",
    coins: "1.5 ETH",
    rank: "1 of 4",
  },
];

function ExclusiveArtist() {
  return (
    <div>
      <div className="text-[#fff] pt-20">
      <h2 className=" relative md:pl-16 pl-10 xl:pl-28 lg:pl-24 mt-10 font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Exclusive Artist{" "}
        <span className="border-t-4 border-indigo-500 absolute top-3 ml-4">
          --------
        </span>
        </h2>
        <div className="lg:flex justify-between w-[83%] mx-auto pt-3  ">
          <h1 className=" text-2xl md:text-4xl font-bold mb-5">Explore</h1>
          <a
            href="#"
            className="text-sm md:text-lg font-bold hover:text-blue-800"
          >
            View all <span>&rarr;</span>
          </a>
        </div>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-[85%] mx-auto p-2">
          {cards.map((cards, index) => (
            <div  key={index}  className="p-3 bg-[#212529] h-[460px]">
              <div>
                <img
                  src={cards.img}
                  alt=""
                  className="rounded-lg h-52 mx-auto"
                />
              </div>
              <div className="pt-2">
                <h2 className="text-xl font-semibold mt-5 mb-5">
                  {cards.title}
                </h2>
                <h3 className="text-slate-400 mb-5">{cards.owner}</h3>
              </div>
              <div className="flex justify-between mb-5">
                <p>{cards.coins}</p>
                <p>{cards.rank}</p>
              </div>
              <div className="flex">
                <a
                  href="#"
                  class="flex items-center justify-center font-bold w-32 rounded-full py-2 border-2 border-white hover:bg-[#3b0764] hover:border-none"
                >
                  Place a Bid
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-10 text-white">
          <a
            href="#"
            class="flex items-center justify-center font-bold w-40 rounded-full py-3 border-2 border-white hover:bg-[#3b0764] hover:border-none"
          >
            Load More
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExclusiveArtist;