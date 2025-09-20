
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import GlitchText from './GlitchText';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `uppercase tracking-widest text-sm transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full hover:text-green-400 ${
      isActive ? 'text-green-400 after:w-full' : 'text-neutral-300'
    }`;

  const navLinks = (
    <>
      <NavLink to="/about" className={navLinkClass}>About</NavLink>
      <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
      <NavLink to="/services" className={navLinkClass}>Services</NavLink>
      <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
    </>
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg shadow-green-500/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="text-2xl font-bold tracking-wider font-display">
            <GlitchText text="TREVORPHOENIX" />
          </NavLink>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neutral-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
