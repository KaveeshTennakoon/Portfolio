import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import resumePdf from '../assets/KaveeshTennakoon_CV.pdf';
import githubLogo from '../assets/github.png';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    window.open(resumePdf);
  };

  const openGithub = () => {
    window.open("https://github.com/KaveeshTennakoon");
  }

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex sm:hidden' : 'hidden sm:flex'} flex-row gap-6`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'
          } hover:text-white text-[20px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li
        className={`text-${
          isSecondary ? 'secondary' : 'white'
        } hover:text-white text-[20px] font-medium cursor-pointer`}
      >
        <button onClick={toggleResume} className="bg-[#915EFF] hover:bg-[#7d4ddb] text-white h-9 py-1 px-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
          Resume
        </button>

      </li>
      <li>
        <button onClick={openGithub} className="bg-[#915EFF] hover:bg-[#7d4ddb] text-white w-9 h-9 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center justify-center">
          <img src={githubLogo} alt="GitHub Logo" />
        </button>
      </li>
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
          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
                toggle ? 'flex' : 'hidden'
              }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
