import React from 'react';

const SkillsSection = () => {
  const categories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', image: '/assets/icons/HTML5.svg' },
        { name: 'CSS', image: '/assets/icons/CSS3.svg' },
        { name: 'JavaScript', image: '/assets/icons/JavaScript.svg' },
        { name: 'Flutter', image: '/assets/icons/Flutter.svg' },
        { name: 'React Js', image: '/assets/icons/React.svg' },
        { name: 'Redux', image: '/assets/icons/Redux.svg' },
        { name: 'Bootstrap', image: '/assets/icons/Bootstrap.svg' },
        { name: 'Tailwind CSS', image: '/assets/icons/Tailwind CSS.svg' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node Js', image: '/assets/icons/Node.js.svg' },
        { name: 'Express Js', image: '/assets/icons/Express.svg' },
        { name: 'Python', image: '/assets/icons/Python.svg' },
        { name: 'Django', image: '/assets/icons/Django.svg' },
        { name: 'MySQL', image: '/assets/icons/mysql.svg' },
        { name: 'MongoDB', image: '/assets/icons/MongoDB.svg' },
      ],
    },
    {
      title: 'Full Stack Frameworks',
      skills: [
        { name: 'MERN Stack', image: '/assets/icons/mern.svg' },
        { name: 'Django', image: '/assets/icons/Django.svg' },
      ],
    },
    {
      title: 'Fundamental Languages',
      skills: [
        { name: 'JavaScript', image: '/assets/icons/JavaScript.svg' },
        { name: 'Java', image: '/assets/icons/Java.svg' },
        { name: 'C', image: '/assets/icons/C.svg' },
        { name: 'C#', image: '/assets/icons/Csharp.svg' },
        { name: 'Python', image: '/assets/icons/Python.svg' },
        { name: 'Dart', image: '/assets/icons/Dart.svg' },
      ],
    },
  ];

  return (
    <section id='skills' className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14 text-white font-poppins">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-300 font-poppins">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-gray-800 text-white rounded-full border border-gray-700 px-5 py-2 shadow-lg hover:shadow-xl hover:bg-gray-700 active:translate-y-[1px] transition-all duration-300 cursor-pointer"
                  >                
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-sm font-medium text-white font-poppins">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
