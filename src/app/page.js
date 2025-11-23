"use client";
import { AuthContext } from "./Auth/Authprovider";

import { useContext, useEffect, useState } from "react";
import BannerSlider from "./Banner/BannerSlider";
import Cards from "./HomeCard/Cards";

export default function Home() {
  const { user, setUser, handlegooglesignin } = useContext(AuthContext);
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(user, handlegooglesignin);
  function handlesignin() {
    handlegooglesignin()
      .then((result) => {
        const loggeduser = result.user;
        setUser(loggeduser);
        console.log(loggeduser);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetch("http://localhost:5000/allanime")
      .then((response) => response.json())
      .then((data) => {
        setAnimeData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  console.log(animeData);
  const skeletonCards = Array.from({ length: 8 }); 





  
   return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_25%),radial-gradient(circle_at_80%_0,rgba(236,72,153,0.12),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.1),transparent_22%)]"></div>
        <div className="relative z-10">
          <BannerSlider />

          <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 text-center sm:mb-14">
        
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                Trending Adventures Tailored for You
              </h2>
              <p className="text-base text-slate-300 sm:text-lg">
                Explore cinematic worlds, discover rare releases, and relive your favorite story arcs with our hand-picked selection.
              </p>
      
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {loading
                ? skeletonCards.map((_, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 shadow-2xl backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="mb-4 h-44 rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 animate-pulse" />
                      <div className="space-y-3">
                        <div className="h-4 w-3/5 rounded-full bg-white/10 animate-pulse" />
                        <div className="h-3 w-2/5 rounded-full bg-white/10 animate-pulse" />
                        <div className="h-3 w-1/3 rounded-full bg-white/10 animate-pulse" />
                        <div className="h-3 w-1/4 rounded-full bg-white/10 animate-pulse" />
                      </div>
                    </div>
                  ))
                : animeData.map((anime, index) => (
                    <Cards key={anime?._id || anime?.id || index} anime={anime} />
                  ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );





}
