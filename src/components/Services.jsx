import React from 'react';
import Reviews from './Reviews';

const Services = () => {
  return (
    <section
      id="services"
      className="pt-32 px-4 sm:px-6 lg:px-8 min-h-screen"
      style={{ background: 'linear-gradient(to bottom right, #fdf6ee, #f9f3e9)' }}
    >
      <h2 className='text-3xl font-bold text-center mb-10 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent'>
        Our Services
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12'>
        {[ 
          {
            title: 'Haircut and Styling',
            desc: 'Professional haircuts and styling tailored to your personality and facial shape.',
          },
          {
            title: 'Makeup Application',
            desc: 'Flawless makeup for events, photoshoots, or everyday beauty.',
          },
          {
            title: 'Facial Treatments',
            desc: 'Deep-cleansing and hydrating facials that leave your skin radiant.',
          },
        ].map(({title, desc}, i) => (
          <div key={i} className='bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-md text-center transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-400/60'>
            <h3 className='text-xl font-semibold mb-3 text-orange-500'>{title}</h3>
            <p className='text-gray-700'>{desc}</p>
          </div>
        ))}
      </div>

      <Reviews />
    </section>
  );
};

export default Services;
