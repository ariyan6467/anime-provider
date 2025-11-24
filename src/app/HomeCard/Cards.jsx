import React from "react";
import Image from "next/image";
const Cards = ({ anime }) => {
  console.log(anime);
  return (


               <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/30">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={anime.image}
          alt={anime.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={false}
        />
        

 <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur ring-1 ring-amber-300/30">
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          {anime.rating} / 10
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold leading-tight text-white drop-shadow-sm">
            {anime.title}
          </h2>
          <p className="text-sm text-slate-300 line-clamp-2">
            Seasons {anime.seasons} • {anime.episodes} episodes • Released {anime.release_date}
          </p>
        </div>

       

        <div className="mt-auto flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Starting at</span>
            <span className="text-xl font-bold text-white">{anime.price}</span>
          </div>
      
        </div>
      </div>
    </div>




  );
};

export default Cards;
