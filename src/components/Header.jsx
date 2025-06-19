import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Additional', href: '#additional' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setActiveSection(href);
        setMenuOpen(false);
      }, 400); // allow scroll animation before closing
    } else {
      setActiveSection(href);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const sectionElements = navLinks.map(link => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.2,
      }
    );

    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionElements.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <a href="#home" className="text-xl sm:text-2xl lg:text-3xl font-bold text-black tracking-tight">
          <span className="block md:hidden">
            <span className="font-light">{'<'}</span>Devesh
            <span className="font-light">Kulal {'/>'}</span>
          </span>
          <span className="hidden md:block lg:hidden">
            <span className="font-light">{'<'}</span>Devesh<span className="font-light"> {'/>'}</span>
          </span>
          <span className="hidden lg:block">
            <span className="font-light">{'<'}</span>Devesh<span className="font-light">Kulal {'/>'}</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex lg:space-x-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="relative px-4 py-2 rounded-full text-sm lg:text-base font-medium overflow-hidden transition-colors"
            >
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeLink"
                  className="absolute inset-0 bg-black rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${activeSection === link.href ? 'text-white' : 'text-black'}`}>
                {link.name}
              </span>
            </button>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white px-4 pb-4 pt-2 border-t border-gray-200"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="relative px-3 py-2 rounded-full text-sm font-medium overflow-hidden text-left"
                >
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute inset-0 bg-black rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${activeSection === link.href ? 'text-white' : 'text-black'}`}>
                    {link.name}
                  </span>
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
