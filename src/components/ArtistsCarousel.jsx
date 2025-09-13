
import { User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const ArtistsCarousel = ({ artists }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.9;

      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="artist"
      className="relative min-h-[60vh] bg-transparent pt-8 px-4"
    >
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-orange-300 text-white p-3 rounded-full shadow-lg hover:bg-orange-400 transition-colors"
        aria-label="Scroll Left"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-orange-300 text-white p-3 rounded-full shadow-lg hover:bg-orange-400 transition-colors"
        aria-label="Scroll Right"
      >
        <ChevronRight size={24} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide px-6 py-2 scroll-smooth"
      >
        {artists.map((artist, index) => (
          <div
            key={index}
            className="min-w-[280px] flex-shrink-0 bg-white/90 rounded-lg shadow-md p-6 text-center 
                       transition duration-300 transform hover:scale-105 
                       hover:shadow-lg hover:shadow-orange-400/60"
          >
            <User className="mx-auto text-orange-300 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-slate-800">{artist.name}</h3>
            <p className="text-gray-600 mb-2">{artist.specialization}</p>
            <p className="text-sm text-gray-500 mb-4">
              Price Range: {artist.priceRange} USD
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistsCarousel;
