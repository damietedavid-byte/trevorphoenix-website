
import React from 'react';
import type { PortfolioItem, Service, Testimonial } from './types';

export const ICONS = {
  RECORDING: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  MIXING: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
    </svg>
  ),
  MASTERING: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-12v10c0 1.105-1.343 2-3 2s-3-.895-3-2V4" />
    </svg>
  ),
};

export const PORTFOLIO_DATA: PortfolioItem[] = [
  { id: 1, title: 'Neon Oblivion', artist: 'Glitch Mob', role: 'Producer, Mix Engineer', year: 2023, imageUrl: 'https://picsum.photos/seed/neon/500/500', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 2, title: 'Digital Ghost', artist: 'Synthwave Dreams', role: 'Mastering Engineer', year: 2022, imageUrl: 'https://picsum.photos/seed/ghost/500/500', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 3, title: 'VHS Sunset', artist: 'Retrograde', role: 'Recording, Mix, Master', year: 2023, imageUrl: 'https://picsum.photos/seed/sunset/500/500', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id: 4, title: 'System Shock', artist: 'Cybernetix', role: 'Producer', year: 2021, imageUrl: 'https://picsum.photos/seed/shock/500/500', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { id: 5, title: 'Static Bloom', artist: 'Data Flowers', role: 'Mix Engineer', year: 2024, imageUrl: 'https://picsum.photos/seed/bloom/500/500', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  { id: 6, title: 'Circuit Soul', artist: 'Analog Kids', role: 'Mastering Engineer', year: 2022, imageUrl: 'https://picsum.photos/seed/soul/500/500', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
];

export const SERVICES_DATA: Service[] = [
  { title: 'Music Production', description: 'Full production from initial concept to final track. I work with you to realize your vision, crafting unique sounds and arrangements.', icon: ICONS.RECORDING, price: 'Starts at $500/song' },
  { title: 'Mixing', description: 'Professional mixing to bring clarity, punch, and balance to your tracks. I use a hybrid analog/digital setup for the best of both worlds.', icon: ICONS.MIXING, price: 'Starts at $250/song' },
  { title: 'Mastering', description: 'The final polish for your music. I ensure your tracks are commercially loud, dynamic, and translate perfectly across all playback systems.', icon: ICONS.MASTERING, price: 'Starts at $80/song' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    { quote: "Trevor's production took our sound to a completely new level. The attention to detail and creative input was exactly what we needed.", author: 'Alex, Synthwave Dreams', project: 'Digital Ghost EP' },
    { quote: "The master was loud, clear, and punchy without sacrificing the dynamics. Absolutely phenomenal work.", author: 'Jett Ryder, Retrograde', project: 'VHS Sunset LP' },
    { quote: "Working with Trevor was a seamless experience. He understood the vision and executed it perfectly. A true professional.", author: 'Sam, Cybernetix', project: 'System Shock Single' },
];

export const SOCIAL_LINKS = {
    spotify: '#',
    soundcloud: '#',
    instagram: '#',
    twitter: '#',
};