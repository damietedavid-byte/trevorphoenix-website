import React from 'react';
import Section from '../components/Section';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

const AboutPage: React.FC = () => {
  // FIX: Specify the element type for the generic hook to match the div element.
  const [imgRef] = useScrollAnimate<HTMLDivElement>();
  // FIX: Specify the element type for the generic hook to match the div element.
  const [textRef] = useScrollAnimate<HTMLDivElement>();

  return (
    <div className="pt-20 bg-black">
      <Section title="About Me">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div ref={imgRef} className="md:col-span-2 section-animate">
            <img
              src="https://picsum.photos/seed/studio/600/800"
              alt="Trevor Phoenix in the studio"
              className="w-full h-auto object-cover border-4 border-neutral-800"
              style={{ filter: 'grayscale(80%) contrast(1.2)' }}
            />
          </div>
          <div ref={textRef} className="md:col-span-3 space-y-6 text-lg text-neutral-300 section-animate">
            <p className="text-green-400 font-bold text-xl">
              [ TREVORPHOENIX // PRODUCER / ENGINEER ]
            </p>
            <p>
              I'm a sonic architect with over a decade of experience in the trenches of music production, mixing, and mastering. My journey started with a 4-track cassette recorder and a relentless curiosity for sound, evolving through countless hours in both analog and digital domains.
            </p>
            <p>
              My philosophy is simple: serve the song. I blend vintage warmth with modern precision to create soundscapes that are emotionally resonant and technically pristine. My sound is defined by punchy drums, deep low-end, and immersive stereo imaging, but my ultimate goal is to translate an artist's raw vision into a polished, powerful final product.
            </p>
            <p>
              From gritty indie rock to ethereal electronic music, I thrive on diversity. My studio is a curated collection of classic outboard gear and cutting-edge software, a hybrid environment designed for creative freedom and sonic excellence.
            </p>
            <p>
              Let's create something timeless.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;