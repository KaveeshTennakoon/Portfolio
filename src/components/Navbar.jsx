import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    window.open("/KaveeshTennakoon.pdf");
  };

  const openGithub = () => {
    window.open("https://github.com/KaveeshTennakoon");
  }

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/kaveesh-tennakoon/");
  }

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  // Horizontal navigation for desktop
  const renderDesktopNavLinks = () => (
    <ul className="hidden sm:flex flex-row gap-6 list-none">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : 'text-white'
          } hover:text-white text-[20px] font-medium cursor-pointer`}
          onClick={() => setActive(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li className="text-white hover:text-white text-[20px] font-medium cursor-pointer">
        <button onClick={toggleResume} className="bg-[#915EFF] hover:bg-[#7d4ddb] text-white h-9 py-1 px-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
          Resume
        </button>
      </li>
      <li>
        <button onClick={openGithub} className="bg-[#915EFF] hover:bg-[#7d4ddb] text-white w-9 h-9 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center justify-center">
          <img src={githubLogo} alt="GitHub Logo" />
        </button>
      </li>
      <li>
        <button onClick={openLinkedin} className="bg-[#915EFF] hover:bg-[#7d4ddb] text-white w-9 h-9 px-1 py-1 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center justify-center">
          <img src={linkedinLogo} alt="Linkedin Logo" />
        </button>
      </li>
    </ul>
  );

  // Vertical navigation for mobile
  const renderMobileNavLinks = () => (
    <ul className="flex flex-col gap-4 list-none">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : 'text-secondary'
          } hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            setToggle(false);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <div className="flex flex-col sm:hidden gap-4 mt-2">
        <button onClick={toggleResume} className="bg-[#915EFF] hover:bg-[#7d4ddb] text-white py-2 px-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 text-[16px] font-medium w-full">
          Resume
        </button>
        <div className="flex flex-row gap-4 justify-center">
          <button onClick={openGithub} className="bg-[#915EFF] hover:bg-[#7d4ddb] text-white w-10 h-10 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center justify-center">
            <img src={githubLogo} alt="GitHub Logo" className="w-6 h-6" />
          </button>
          <button onClick={openLinkedin} className="bg-[#915EFF] hover:bg-[#7d4ddb] text-white w-10 h-10 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center justify-center">
            <img src={linkedinLogo} alt="Linkedin Logo" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              KAVEESH&nbsp;
              <span className="sm:block hidden">TENNAKOON</span>
            </p>
          </Link>
          
          {renderDesktopNavLinks()}
          
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-6 absolute top-14 right-0 mx-2 my-2 min-w-[200px] z-10 rounded-xl bg-black shadow-lg border border-[#333333] ${
                toggle ? 'flex' : 'hidden'
              }`}
            >
              {renderMobileNavLinks()}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;