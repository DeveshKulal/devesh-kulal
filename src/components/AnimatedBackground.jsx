import React from 'react';

const FloatingCube = ({ delay = 0, size = 20, x = 0, y = 0 }) => (
  <div 
    className="absolute pointer-events-none opacity-20"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      animation: `float 6s ease-in-out infinite ${delay}s, rotate 8s linear infinite`
    }}
  >
    <div 
      className="bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg shadow-lg"
      style={{ width: size, height: size }}
    />
  </div>
);

const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <FloatingCube delay={0} size={15} x={10} y={20} />
    <FloatingCube delay={1} size={20} x={80} y={10} />
    <FloatingCube delay={2} size={12} x={60} y={70} />
    <FloatingCube delay={3} size={18} x={20} y={60} />
    <FloatingCube delay={4} size={14} x={90} y={80} />
    <FloatingCube delay={2.5} size={16} x={40} y={30} />
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/5 via-blue-100/5 to-slate-100/5" />
  </div>
);

export default AnimatedBackground;
