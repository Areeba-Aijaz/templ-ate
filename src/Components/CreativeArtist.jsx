import React from "react";

const cards = [
  {
    imgSrc: "avatar6.jpg",
    title: "@Richard",
    coins: "1.5 BNB",
  },
  {
    imgSrc: "avatar5.jpg",
    title: "@JohnDeo",
    coins: "2.3 BNB",
  },
  {
    imgSrc: "avatar6.jpg",
    title: "@Sara",
    coins: "2.5 BNB",
  },
  {
    imgSrc: "avatar4.jpg",
    title: "@ArhamH",
    coins: "1.9 BNB",
  },
  {
    imgSrc: "avatar5.jpg",
    title: "@Yasmin",
    coins: "3.2 BNB",
  },
  {
    imgSrc: "avatar6.jpg",
    title: "@Junaid",
    coins: "4.7 BNB",
  },
];

function CreativeArtist() {
  return (
    <div>
      <div className=" lg:py-16 text-[#fff]">
        <h2 className=" relative md:pl-16 pl-10 xl:pl-28 lg:pl-24 mt-10 font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Creative Artist{" "}
        <span className="border-t-4 border-indigo-500 absolute top-3 ml-4">
          --------
        </span>
        </h2>

        <h1 className="text-white md:pl-16 pl-10 xl:pl-28 lg:pl-24 mt-10 text-4xl font-semibold mb-8">
          Top Sellers
        </h1>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[85%] mx-auto text-center p-2">
          {cards.map((card, index) => (
            <div key={index} className="p-6 rounded-xl bg-[#212529] flex">
              <div className="flex items-center">
                <div>
                  <img src={card.imgSrc} className="rounded-full w-16 mr-2" />
                </div>
                <div>
                  <h1 className="mb-2">{card.title}</h1>
                  <h1>{card.coins}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreativeArtist;