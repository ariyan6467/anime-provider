import React from "react";

const Cards = ({ anime }) => {
  console.log(anime);
  return (
                <div className=" h-[650px] bg-gray-900 text-white rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300 hover:translate-y-[-12px] hover:shadow-2xl cursor-pointer group">
            <div className="w-full h-1/2 overflow-hidden relative">
                <img src={anime.image} alt={anime.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="p-6 h-2/5 flex flex-col justify-between">
                <h2 className="text-3xl font-extrabold text-gradient mb-2">{anime.title}</h2>
                <p className="text-sm text-gray-400"><strong>Genre:</strong> {anime.genre}</p>
                <p className="text-sm"><strong>Episodes:</strong> {anime.episodes}</p>
                <p className="text-sm"><strong>Seasons:</strong> {anime.seasons}</p>
                <p className="text-sm"><strong>Release Date:</strong> {anime.release_date}</p>
               
                <div className="flex justify-between items-center mt-3 text-lg">
                    <span className="font-bold text-yellow-400">{anime.price}</span>
                    <span className="text-yellow-400">Rating: {anime.rating} / 10</span>
                </div>
            </div>
        </div>
  );
};

export default Cards;
