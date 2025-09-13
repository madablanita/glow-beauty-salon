import React, { useEffect, useRef, useState } from 'react';
import salonImage2 from '../assets/salonImage2.jpg'; 

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.3, 
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      className="pt-32 px-4 sm:px-6 lg:px-8 min-h-screen bg-[#fdf6ee] flex items-center"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        

        <div
          ref={textRef}
          className={`bg-white p-6 sm:p-8 rounded-lg shadow-lg transform transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <h4 className="text-sm uppercase text-gray-600 mb-2">About Us</h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-6 leading-tight">
            Our Story: Excellence in Beauty, <br /> Passion in Every Detail
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Welcome to <span className="font-semibold text-orange-500">GLOW Beauty Salon</span>,
            your premier destination for top-notch hair care and relaxation in the heart of New York, NY.
            Proudly serving Lexington Ave. & Madison Ave. in New York City, Connecticut, Westchester,
            and New Jersey. <br /><br />
            Our experienced and passionate team of stylists and spa professionals are dedicated to
            providing personalized services that cater to your unique style and wellness needs.
            Whether you’re looking for a fresh haircut, a stunning color transformation, or a
            rejuvenating spa treatment, we are here to make you look and feel your best. <br /><br />
            At GLOW Beauty Salon, we combine modern techniques with a warm and inviting atmosphere
            to ensure every visit is an enjoyable and luxurious experience.
          </p>
        </div>

        <div className="hidden md:block">
          <img
            src={salonImage2}
            alt="Salon"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
