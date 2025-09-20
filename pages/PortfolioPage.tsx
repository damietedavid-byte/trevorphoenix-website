
import React from 'react';
import Section from '../components/Section';
import PortfolioCard from '../components/PortfolioCard';
import { PORTFOLIO_DATA } from '../constants';

interface PortfolioPageProps {
  isHomePageSection?: boolean;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ isHomePageSection = false }) => {
  const content = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {PORTFOLIO_DATA.slice(0, isHomePageSection ? 3 : PORTFOLIO_DATA.length).map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </div>
  );

  if (isHomePageSection) {
    return (
      <Section title="Featured Work">
        {content}
      </Section>
    );
  }

  return (
    <div className="pt-20 bg-black">
      <Section title="Portfolio / Discography">
        {content}
      </Section>
    </div>
  );
};

export default PortfolioPage;
