
import React from 'react';

interface GlitchTextProps {
  text: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  return (
    <div className="relative inline-block group">
      <span className="absolute top-0 left-0 w-full h-full text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ textShadow: '2px 2px #ff0055, -2px -2px #00fff7' }} aria-hidden="true">
        {text}
      </span>
      <span className="relative z-10">{text}</span>
    </div>
  );
};

export default GlitchText;
