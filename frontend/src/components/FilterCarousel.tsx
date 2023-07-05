import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FilterCard from './FilterCard';

interface FilterCard {
  title: string;
  description: string;
}

interface FilterCarouselProps {
  filterCards: FilterCard[];
}

const FilterCarousel: React.FC<FilterCarouselProps> = ({ filterCards }) => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
      {filterCards.map((card, index) => (
        <div key={index}>
          <FilterCard
            title={card.title}
            description={card.description}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default FilterCarousel;