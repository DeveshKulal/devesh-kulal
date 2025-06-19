import { Landmark, University } from 'lucide-react';
import React from 'react';

const educationData = [
  {
    course: 'BE in Information Science and Engineering - 9.13 CGPA',
    university: 'Visvesvaraya Technological University',
    institute: 'A J Institute of Engineering and Technology, Mangalore',
  },
  {
    course: '12th - Science (PCMC) - 84.84%',
    university: 'Karnataka State Board',
    institute: 'SDPT PU College, Kateel',
  },
  {
    course: 'SSLC - 83.68%',
    university: 'Karnataka State Board',
    institute: 'SDPT High School, Kateel',
  },
];

function EducationSection() {
  return (
    <section id='education' className="py-16 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-10 font-poppins">Education</h2>
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {educationData.map((edu, index) => (
          <div key={index} className="text-left">
            <p className="text-xl font-semibold mb-3">  
                {edu.course}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-white bg-black rounded-md px-4 py-2">
                {edu.university}
              </span>
              <span className="text-sm text-white bg-black rounded-md  px-4 py-2">
                {edu.institute}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
