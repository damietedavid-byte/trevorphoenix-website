
import React from 'react';
import Section from '../components/Section';
import { SERVICES_DATA } from '../constants';
import ServiceCard from '../components/ServiceCard';

interface ServicesPageProps {
  isHomePageSection?: boolean;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ isHomePageSection = false }) => {
  const content = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {SERVICES_DATA.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );

  if (isHomePageSection) {
    return (
      <Section title="My Services">
        {content}
      </Section>
    );
  }

  return (
    <div className="pt-20 bg-black">
      <Section title="Services">
        {content}
        <div className="text-center mt-16">
            <p className="text-lg text-neutral-300">Have a unique project? Let's talk.</p>
            <a href="#/contact" className="mt-4 inline-block bg-transparent text-green-400 font-bold uppercase tracking-widest py-3 px-8 border-2 border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300">
                Get a Custom Quote
            </a>
        </div>
      </Section>
    </div>
  );
};

export default ServicesPage;
