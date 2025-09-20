
import React from 'react';
import Section from '../components/Section';
import { TESTIMONIALS_DATA } from '../constants';
import TestimonialCard from '../components/TestimonialCard';

interface TestimonialsPageProps {
  isHomePageSection?: boolean;
}

const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ isHomePageSection = false }) => {
  const content = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
        ))}
    </div>
  );

  if (isHomePageSection) {
    return (
        <Section title="What Clients Say">
            {content}
        </Section>
    );
  }

  // This could be its own dedicated page in the future, but for now it's a section
  // on the homepage. If a dedicated page is needed, expand this part.
  return null; 
};

export default TestimonialsPage;
