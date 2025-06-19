import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import EducationSection from './components/EducationSection';
import AdditionalSection from './components/AdditionalSection';

const App = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800">
      <AnimatedBackground />
      <main className="relative z-10">
        <Header/>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection/>
        <ProjectsSection />
        <AdditionalSection/>
        <Footer />
      </main>
    </div>
  );
};

export default App;
