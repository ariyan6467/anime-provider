import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300); // Start the animation after 0.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
     <section className="relative isolate flex min-h-[540px] w-full items-center overflow-hidden rounded-b-[48px] bg-slate-950 px-6 py-12 text-white shadow-[0_25px_70px_-35px_rgba(0,0,0,0.6)] sm:py-16 lg:min-h-[620px] lg:px-12">
      <div className="absolute inset-0">
        <Image
          src="https://4kwallpapers.com/images/walls/thumbs_3t/23651.jpg"
          alt="Anime hero"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(236,72,153,0.25),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.24),transparent_25%)]" />
      </div>

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div
          className={`max-w-2xl space-y-6 transition-all duration-700 ease-out ${
            animate ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-100 ring-1 ring-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(74,222,128,0.2)] animate-ping" />
            New season drops weekly
          </div>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Dive into the worlds that <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">move you</span> most.
          </h1>
          <p className="text-lg text-slate-200/90 sm:text-xl">
            Binge classics, discover hidden gems, and follow the latest arcs with cinematic fidelity and bespoke recommendations.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-fuchsia-900/30 ring-1 ring-fuchsia-400/40 transition duration-300 hover:scale-[1.02]"
            >
              <span className="relative">Start exploring</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
            >
              Watch teaser
            </a>
          </div>
         
        </div>

        <div
          className={`relative grid gap-4 rounded-2xl border border-white/10 bg-white/10/60 p-6 backdrop-blur-xl shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)] transition-all duration-700 ${
            animate ? "translate-y-0 opacity-100 delay-150" : "translate-y-6 opacity-0"
          }`}
        >
                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-200">Live spotlight</p>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Updating feed
              </div>
            </div>
            <div className="relative h-52 overflow-hidden rounded-xl border border-white/10 shadow-lg">
              <Image
                src="https://4kwallpapers.com/images/walls/thumbs_3t/23010.jpg"
                alt="Featured anime"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
            <div className="relative space-y-2 rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-between text-sm text-slate-200">
                <span className="font-semibold text-white">Featured tonight</span>
                <span className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">New</span>
              </div>
              <p className="text-sm text-slate-300">
                Experience dynamic landscapes and heartfelt storytelling from the most anticipated releases of the season.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-200">
                <span className="rounded-full bg-fuchsia-500/15 px-3 py-1 ring-1 ring-fuchsia-400/30">4K ready</span>
                <span className="rounded-full bg-cyan-400/15 px-3 py-1 ring-1 ring-cyan-400/30">Dolby Atmos</span>
                <span className="rounded-full bg-amber-400/20 px-3 py-1 ring-1 ring-amber-300/40">Multi-language</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
