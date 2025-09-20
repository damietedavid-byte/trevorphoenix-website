import React from 'react';
import type { Testimonial } from '../types';
import { useScrollAnimate } from '../hooks/useScrollAnimate';


interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // FIX: Specify the element type for the generic hook to match the div element.
  const [ref] = useScrollAnimate<HTMLDivElement>();
  return (
    <div ref={ref} className="bg-neutral-900 p-6 border-l-4 border-green-500 section-animate">
      <blockquote className="text-neutral-300 italic">
        "{testimonial.quote}"
      </blockquote>
      <cite className="block text-right mt-4 not-italic">
        <span className="font-bold text-white">{testimonial.author}</span>
        <span className="block text-sm text-neutral-400">{testimonial.project}</span>
      </cite>
    </div>
  );
};

export default TestimonialCard;