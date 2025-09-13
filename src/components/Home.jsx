import React, { useEffect, useState } from 'react';
import salonImage from '../assets/salonImage.jpg';

const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${salonImage})` }}
    >
      <div className="absolute inset-0 bg-white opacity-60 z-0"></div>

      <div
        className={`relative z-10 text-center transition-all duration-1000 ease-out 
        ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight 
          bg-gradient-to-r from-orange-500 via-yellow-400 to-amber-200 text-transparent bg-clip-text"
        >
          GLOW Beauty Salon
        </h1>

      <p className="text-xl sm:text-2xl text-orange-700 font-semibold max-w-xl mx-auto">
          Your Beauty is Our Duty
      </p>


      </div>
    </section>
  );
};

export default Home;
