import React from 'react';
import ArtistsCarousel from './ArtistsCarousel';

export const ArtistsList = [
  { name: "John Carl", specialization: "Hairstylist", priceRange: "50-70" },
  { name: "Olivia Li", specialization: "Makeup Artist", priceRange: "40-60" },
  { name: "Dakota Ghouri", specialization: "Skincare Specialist", priceRange: "30-50" },
  { name: "Hannah Grey", specialization: "Hairstylist", priceRange: "45-65" },
  { name: "Nicole Stewart", specialization: "Makeup Artist", priceRange: "40-60" },
  { name: "Andrew Brown", specialization: "Hairstylist", priceRange: "50-70" },
];

const Artists = () => {
  return (
    <section
      id="artists"
      className="pt-28 pb-16 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(to bottom right, #fdf6ee, #f9f3e9)' }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mb-6">
        Our Artists
      </h2>
      <ArtistsCarousel artists={ArtistsList} />
    </section>
  );
};

export default Artists;
