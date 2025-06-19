import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-black text-white px-6 py-10">
    <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
      {/* Contact Section */}
      <div className='sm:px-4 md:px-12 '>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>
        <p className="text-slate-300 mb-6">
          I am Devesh and this is my personal Portfolio website.
        </p>
        <div className="space-y-4 text-sm sm:text-base">
          <div className="flex items-center gap-3">
            <Mail className="text-slate-400" />
            <span>deveshkulal27@email.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-slate-400" />
            <span>+91 8050696452</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-slate-400" />
            <span>Kateel, Mangaluru, Karnataka, India</span>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div className='sm:px-4 md:px-12 '>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Explore</h2>
        <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
          {['home', 'about', 'skills', 'experience', 'education', 'projects', 'additional'].map(link => (
            <li key={link}>
              <a href={`#${link}`} className="hover:text-white capitalize">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-10 flex justify-center items-center text-center text-sm text-slate-400">
      <span className="flex items-center gap-2">
        Developed with
        <span className="text-red-500 text-lg animate-heart-beat">💓</span>
        using
        <img
          src="/assets/icons/React.svg"
          alt="React"
          className="w-5 h-5 animate-slow-spin"
        />
      </span>
    </div>
  </footer>
);

export default Footer;
