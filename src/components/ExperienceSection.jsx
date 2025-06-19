import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Full-Stack Web Development Intern',
    company: 'Accolade Tech Solutions, Mangalore',
    duration: 'Feb 2025 – May 2025',
    description:
      'Built full-stack web apps using React, Node.js, MySQL, Express.js, and MongoDB. Collaborated in an agile team, contributing clean code and using REST APIs effectively.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'REST APIs'],
    side: 'left',
  },
  {
    title: 'Flutter App Development Intern',
    company: 'Rosette Smart Life, Moodabidri',
    duration: 'Oct 2023 – Nov 2023',
    description:
      'Built a functional Flutter app, collaborated with team members, and gained hands-on experience in Dart and mobile UI design.',
    techStack: ['Flutter', 'Dart', 'UI Design', 'Team Collaboration'],
    side: 'right',
  },
];

const ExperienceSection = () => {
  return (
    <section id='experience' className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-black mb-16 font-poppins">Experience</h2>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Center timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

        {experiences.map((exp, index) => {
          const isLeft = exp.side === 'left';

          return (
            <div
              key={index}
              className="relative mb-16 flex flex-col md:flex-row items-center w-full"
            >
              {/* Left side (Web) */}
              <div className="hidden md:flex w-1/2 justify-end pr-6">
                {isLeft ? (
                  <ExperienceCard exp={exp} />
                ) : (
                  <div className="text-base text-black pt-2">{exp.duration}</div>
                )}
              </div>

              {/* Center timeline dot */}
              <div className="z-10 w-10 h-10 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-md mx-4">
                <Briefcase className="text-blue-600 w-5 h-5" />
              </div>

              {/* Right side (Web) */}
              <div className="hidden md:flex w-1/2 justify-start pl-6">
                {!isLeft ? (
                  <ExperienceCard exp={exp} />
                ) : (
                  <div className="text-base text-black pt-2">{exp.duration}</div>
                )}
              </div>

              {/* Mobile layout */}
              <div className="flex flex-col md:hidden w-full items-center text-center">
                <p className="text-sm text-black mb-2">{exp.duration}</p>
                <ExperienceCard exp={exp} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// Reusable Card Component
const ExperienceCard = ({ exp }) => (
  <div className="bg-black text-white p-6 rounded-xl shadow-lg border border-gray-700 w-full max-w-md text-left">
    <h3 className="text-xl font-semibold text-green-400">{exp.title}</h3>
    <p className="text-sm text-gray-400">{exp.company}</p>
    <p className="mt-3 mb-4 text-gray-300">{exp.description}</p>
    <div className="flex flex-wrap gap-2">
      {exp.techStack.map((tech, i) => (
        <span
          key={i}
          className="border border-gray-700 text-sm px-3 py-1 rounded-full bg-gray-800 text-white"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default ExperienceSection;
