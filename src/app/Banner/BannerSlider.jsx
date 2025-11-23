import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500); // Start the animation after 0.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center text-white text-center w-full h-[500px] sm:h-[600px] overflow-hidden bg-cover">
      {/* Image */}
      <img
        src="https://4kwallpapers.com/images/walls/thumbs_3t/23651.jpg"
        alt="Hero Image"
        className="w-full h-full object-cover absolute inset-0 z-[-1]"
      />
      
      {/* Content */}
      <div className={`opacity-0 translate-y-5 transition-opacity duration-1000 transition-transform ease-in-out ${animate ? 'opacity-100 translate-y-0' : ''}`}>
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">
          Your Ultimate Solution for Growth
        </h1>
        <p className="text-lg md:text-xl mb-6">Discover the power of data-driven decisions.</p>
        <a
          href="#cta"
          className="px-6 py-3 text-lg bg-red-500 text-white rounded-md font-semibold shadow-lg transition-transform transform hover:bg-red-600 hover:translate-y-[-2px]"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
