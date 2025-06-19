import React from 'react';
import { Lightbulb, ShipWheelIcon } from 'lucide-react';

const AboutSection = () => (
  <section id='about' className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">

        {/* Left Div - Enlarged Profile Image with Black Border */}
        <div className="w-40  sm:w-52 md:w-60 lg:w-72 flex-shrink-0">
          <div className="rounded-full  overflow-hidden border-4 border-black shadow-lg">
            <img
              src="/assets/profile.jpg" // Update this to your actual image path
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Div - About Content */}
        <div className="bg-black rounded-[2rem] text-white p-6 sm:p-8 md:p-10 w-full">
          <div className="flex items-center gap-3 mb-5">
            <ShipWheelIcon size={30} className="text-yellow-400" />
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins">About Me</h2>
          </div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Hi, I am Devesh Kulal a passionate software developer who thrives on solving real-world problems through technology.
          I love transforming ideas into meaningful digital experiences, from concept to execution. Whether it’s creating intuitive applications, optimizing systems, or building solutions that make a tangible impact I am always driven by curiosity, creativity, and a desire to make things better. I value fast learning, purposeful work, and collaboration with people who inspire growth.
          </p>
        </div>

      </div>
    </div>
  </section>
);

export default AboutSection;
