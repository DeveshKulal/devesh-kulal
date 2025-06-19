import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'DL360 - Driving License Management System',
    description:
      'Role-based full-stack platform for LLR application, license renewal, and real-time status tracking.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    image: '/assets/projects/dl360.png',
    github: 'https://github.com/DeveshKulal/DL360.git',
    demo: '',
  },
  {
    title: 'Smart Traffic Control and Violation Detection System',
    description:
      'YOLO-based real-time vehicle detection and violation logging with ANPR and live traffic monitoring.',
    tech: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'HTML', 'CSS', 'JavaScript', 'PyTessaract'],
    image: '/assets/projects/traffic.png',
    github: 'https://github.com/DeveshKulal/vehicel_detection_and_violation_detection.git',
    demo: '',
  },
  {
    title: 'Weather App',
    description:
      'Flutter-based weather app with responsive UI and smooth performance across devices.',
    tech: ['Flutter', 'Dart', 'Figma'],
    image: '/assets/projects/weather.png',
    github: 'https://github.com/DeveshKulal/Weather_App.git',
    demo: '',
  },
  {
    title: 'Skillshare - Live Workshop Platform',
    description:
      'A web app for creating, managing, and streaming skill-based workshops with real-time participant interactions.',
    tech: ['Django', 'WebRTC', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: '/assets/projects/skillshare.png',
    github: '#',
    demo: '',
  },
  {
    title: 'Plantopia - Online Plant Store',
    description:
      'An e-commerce platform to explore and purchase indoor plants with an intuitive and responsive UI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Cucumber', 'Selenium'],
    image: '/assets/projects/plantopia.png',
    github: 'https://github.com/DeveshKulal/plantopia.git',
    demo: 'https://plantopia-jade.vercel.app/login.html',
  },
  {
    title: 'HealthApp - Daily Routine Tracker',
    description:
      'A cross-platform mobile app to track daily routines including hydration, workouts, meals, and sleep for a healthy lifestyle.',
    tech: ['Flutter', 'Dart'],
    image: '/assets/projects/healthapp.png',
    github: 'https://github.com/DeveshKulal/Health_app.git',
    demo: '',
  }
];

const ProjectsSection = () => {
  return (
    <section id='projects' className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-10 font-poppins">Projects</h2>

        {/* Responsive Grid for All Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <ProjectCard key={proj.title} proj={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ proj }) => (
  <div className="bg-black text-white rounded-2xl p-4 shadow-lg border border-gray-700">
    {/* Image */}
    <div className="h-36 bg-white rounded-md mb-4 overflow-hidden">
      <img
        src={proj.image}
        alt={proj.title}
        className="object-cover w-full h-full rounded-md"
      />
    </div>

    {/* Title & Description */}
    <h3 className="text-lg font-bold mb-1">{proj.title}</h3>
    <p className="text-gray-300 text-sm mb-4">{proj.description}</p>

    {/* Tech Tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      {proj.tech.map((tech) => (
        <span
          key={tech}
          className="bg-gray-800 text-white px-3 py-1 rounded-full border border-gray-700 shadow-md text-sm font-medium"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex gap-4 text-sm">
      <a
        href={proj.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-blue-400 hover:underline"
      >
        <Github size={16} /> Code
      </a>
      {proj.demo?.startsWith('https')&&(
        <a
          href={proj.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-green-400 hover:underline"
        >
          <ExternalLink size={16} /> Demo
        </a>
      )}
    </div>
  </div>
);

export default ProjectsSection;
