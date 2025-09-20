
import React, { useState, useRef } from 'react';
import type { PortfolioItem } from '../types';
import AudioPlayer from './AudioPlayer';

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!audioRef.current) return;
      
      if (isPlaying) {
          audioRef.current.pause();
      } else {
          audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
  };


  return (
    <div className="group relative overflow-hidden border-2 border-neutral-800 transition-all duration-500 hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/20">
      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/80 transition-all duration-500 flex flex-col justify-end p-6">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
          <h3 className="text-2xl font-bold font-display text-white">{item.title}</h3>
          <p className="text-neutral-300">{item.artist}</p>
          <p className="text-sm text-green-400 uppercase tracking-widest mt-1">{item.role}</p>
        </div>

        <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <AudioPlayer src={item.audioSrc} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
