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
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white ring-1 ring-white/20">
          {anime.genre}







        </div>

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
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-fuchsia-900/30 transition duration-300 group-hover:scale-[1.03]">
            Preview
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>




  );
};

export default Cards;
