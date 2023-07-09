import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import FilterCard from './FilterCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../components/filtercarousel.css';

interface FilterCard {
  title: string;
  description: string;
}

interface FilterCarouselProps {
  filterCards: FilterCard[];
}

const FilterCarousel: React.FC<FilterCarouselProps> = ({ filterCards }) => {
  return (
    <div className="h-1/2">
      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} transitionTime={1000} showStatus={false}>
        {filterCards.map((card, index) => (
          <div key={index}>
            <FilterCard
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FilterCarousel;