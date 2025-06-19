import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id='home' className="min-h-screen bg-white text-black flex items-center px-6 font-poppins" >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-12">
        {/* Left Text Section */}
        <div className="text-center md:text-left px-8">
          <p className='text-xl md:text-2xl mb-4 pt-6 transform transition-all duration-1000 ease-out'>
            Hey
            <span className="inline-block origin-[70%_70%] animate-wave">👋</span>, I'm{' '}
          </p>
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 transform transition-all duration-1000 ease-out 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
          >
            {/* underline underline-offset-4  */}
            <span className=" decoration-black">
              Devesh Kulal
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl font-light mb-6 transform transition-all duration-1000 ease-out delay-200 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Crafting smart tech solutions to {' '}
            <span className="font-semibold">real-world </span>
            problems.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-opacity duration-1000 ease-out delay-500 
              ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <a
              href="#projects"
              className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition"
            >
              View My Work
            </a>
            <a
              href="/Devesh_Resume.pdf"
              download
              className="border border-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
          <div className="flex gap-4 pt-8 px-4 justify-center md:justify-start">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/devesh-kulal-1b878629a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="/assets/icons/LinkedIn.svg"
                alt="LinkedIn"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/DeveshKulal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                src="/assets/icons/GitHub.svg"
                alt="GitHub"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/devesh_kulal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="/assets/icons/instagram.svg"
                alt="Instagram"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end ">
          <img
            src="/assets/hero-illustration1.png" // Replace with your actual image path
            alt="Devesh Illustration"
            className={`w-[300px] md:w-[600px]  transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
