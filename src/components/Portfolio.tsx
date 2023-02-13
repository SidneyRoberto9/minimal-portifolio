import { Fragment } from 'react';

import { portfolioData } from '../data/portfolio.data';
import { PortfolioItem } from './PortfolioItem';

export const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioData.map((project) => (
          <PortfolioItem
            key={project.title}
            title={project.title}
            imgUrl={project.imgUrl}
            link={project.link}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  );
};
