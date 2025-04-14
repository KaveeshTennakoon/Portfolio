import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';
import { navLinks } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openGithub = () => {
    window.open("https://github.com/KaveeshTennakoon");
  }

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/kaveesh-tennakoon/");
  }

  return (
    <footer className="bg-primary text-white mt-20">
      <div className={`${styles.paddingX} py-10`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <h2 className="text-2xl font-bold">KAVEESH TENNAKOON</h2>
            </Link>
            <p className="text-secondary mt-2">
              Building innovative solutions through creative coding and passionate development.
            </p>
            <div className="flex gap-4 mt-4">
              <button onClick={openGithub} className="bg-[#915EFF] hover:bg-[#7d4ddb] w-10 h-10 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center justify-center">
                <img src={githubLogo} alt="GitHub Logo" className="w-6 h-6" />
              </button>
              <button onClick={openLinkedin} className="bg-[#915EFF] hover:bg-[#7d4ddb] w-10 h-10 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center justify-center">
                <img src={linkedinLogo} alt="LinkedIn Logo" className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.id} className="text-secondary hover:text-white transition-colors">
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Get In Touch</h3>
            <ul className="flex flex-col gap-3 text-secondary">
              <li className="hover:text-white transition-colors">
                <a href="mailto:tennakoonkaveesh@gmail.com">tennakoonkaveesh@gmail.com</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="tel:+94771182124">+94 (77) 118 2124</a>
              </li>
              <li className="mt-4">
                <a 
                  href="#contact" 
                  className="bg-[#915EFF] hover:bg-[#7d4ddb] text-white py-2 px-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 inline-block"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#333333] py-6 text-center text-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {currentYear} Kaveesh Tennakoon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;