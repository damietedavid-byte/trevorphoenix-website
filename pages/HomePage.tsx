
import React from 'react';
import { Link } from 'react-router-dom';
import GlitchText from '../components/GlitchText';
import PortfolioPage from './PortfolioPage';
import ServicesPage from './ServicesPage';
import TestimonialsPage from './TestimonialsPage';


const HomePage: React.FC = () => {
  return (
    <div>
      <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
          src="https://assets.mixkit.co/videos/preview/mixkit-mixing-sound-in-a-music-studio-420-large.mp4"
        ></video>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display uppercase tracking-wider">
            <GlitchText text="TREVORPHOENIX" />
          </h1>
          <p className="text-xl md:text-2xl mt-4 font-light tracking-widest uppercase text-green-400" style={{ textShadow: '0 0 8px #0f0' }}>
            Music Producer / Sound Engineer
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-green-500 text-black font-bold uppercase tracking-widest py-3 px-8 border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
      
      <div className="bg-neutral-900">
        <PortfolioPage isHomePageSection={true} />
      </div>

      <div className="bg-black">
         <ServicesPage isHomePageSection={true} />
      </div>
      
       <div className="bg-neutral-900">
        <TestimonialsPage isHomePageSection={true} />
      </div>
    </div>
  );
};

export default HomePage;
