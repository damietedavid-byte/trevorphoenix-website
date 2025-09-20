import React from 'react';
import type { Service } from '../types';
import { useScrollAnimate } from '../hooks/useScrollAnimate';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // FIX: Specify the element type for the generic hook to match the div element.
  const [ref] = useScrollAnimate<HTMLDivElement>();
  return (
    <div ref={ref} className="bg-neutral-900 p-8 border border-neutral-800 hover:border-green-500/50 transition-all duration-300 flex flex-col items-center section-animate">
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold font-display mb-3">{service.title}</h3>
      <p className="text-neutral-400 flex-grow">{service.description}</p>
      {service.price && (
        <p className="text-green-400 font-bold mt-6 text-lg">{service.price}</p>
      )}
    </div>
  );
};

export default ServiceCard;