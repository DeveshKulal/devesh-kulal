import React, { useEffect, useRef } from 'react';

function AdditionalSection() {
  const hobbies = ['Drawing', 'Reading', 'Photography', 'Gaming', 'Traveling'];
  const drawingImages = [
    '/assets/drawings/drawing1.jpg',
    '/assets/drawings/drawing2.jpg',
    '/assets/drawings/drawing3.jpg',
    '/assets/drawings/drawing4.jpg',
    '/assets/drawings/drawing5.jpg',
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let currentIndex = 0;
    const slideInterval = setInterval(() => {
      const scrollAmount = container.children[0].offsetWidth + 16; // card width + gap
      container.scrollTo({
        left: scrollAmount * currentIndex,
        behavior: 'smooth',
      });

      currentIndex = (currentIndex + 1) % drawingImages.length;
    }, 1000); // 1 second interval

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section id='additional' className="py-20 px-6 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        
        {/* Left Side: Hobbies */}
        <div className="w-full md:w-1/4">
          <h2 className="text-4xl font-bold text-center text-black mb-10 font-poppins">Hobbies</h2>
          <ul className="space-y-4 text-lg">
            {hobbies.map((hobby, index) => (
              <li
                key={index}
                className="text-white bg-black rounded-[2rem] shadow-md px-6 py-3 border-l-4 "
              >
                {hobby}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-3/4">
          <h2 className="text-4xl font-bold text-center text-black mb-10 font-poppins">Drawings</h2>

          {/* Mobile: Horizontal Scroll with Auto Slide */}
          <div ref={scrollRef} className="md:hidden flex gap-4 overflow-x-auto scroll-smooth no-scrollbar">
            {drawingImages.map((src, index) => (
              <div
                key={index}
                className="min-w-[250px] max-w-[250px] h-60 flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={src}
                  alt={`Drawing ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Desktop: Grid View */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {drawingImages.map((src, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={src}
                  alt={`Drawing ${index + 1}`}
                  className="w-auto h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdditionalSection;
