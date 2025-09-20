
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 border-t border-green-500/20 text-neutral-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} TREVORPHOENIX. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href={SOCIAL_LINKS.soundcloud} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">SoundCloud</a>
            <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Spotify</a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Instagram</a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
