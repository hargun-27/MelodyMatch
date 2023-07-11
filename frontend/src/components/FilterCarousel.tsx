import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import FilterCard from './FilterCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../components/filtercarousel.css';
import { RecommendationOptions } from '../api/RecommendationOptions';

interface FilterCard {
  title: string;
  description: string;
  sliderRange: boolean;
}

interface FilterCarouselProps {
  filterCards: FilterCard[];
  settings: RecommendationOptions;
  setSettings: React.Dispatch<React.SetStateAction<RecommendationOptions>>
}

const FilterCarousel: React.FC<FilterCarouselProps> = ({ filterCards, settings, setSettings }) => {
  return (
    <div className="h-1/2">
      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} transitionTime={1000} showStatus={false}>
        {filterCards.map((card, index) => (
          <div key={index}>
            <FilterCard
              title={card.title}
              description={card.description}
              sliderRange={card.sliderRange}
              settings={settings}
              setSettings={setSettings}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FilterCarousel;