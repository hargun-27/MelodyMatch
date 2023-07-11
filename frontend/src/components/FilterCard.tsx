import React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { RecommendationOptions } from '../api/RecommendationOptions';

interface FilterCardProps {
  title: string;
  description: string;
  sliderRange: boolean;
  settings: RecommendationOptions;
  setSettings: React.Dispatch<React.SetStateAction<RecommendationOptions>>;
}

const FilterSlider = styled(Slider)({
  color: '#D9D9D9',
  width: '85%',
  height: 20,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 42,
    width: 42,
    backgroundColor: '#1DB954',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.5,
    fontSize: 25,
    background: 'unset',
    padding: 0,
  },
  '& .MuiSlider-mark': {
    width: 0,
  },
});

const Marks = [
  {
    value: 0,
    label: 'Slow',
  },
  {
    value: 50,
    label: 'Medium',
  },
  {
    value: 100,
    label: 'Fast',
  },
];

function valueLabelFormat(value: number) {
  const mark = Marks.find((mark) => mark.value === value);
  return mark ? mark.label : '';
}


const titleMap: { [key: string]: string; } = {
  "BPM": "target_tempo",
  "Danceability": "target_danceability",
  "Energy Level": "target_energy",
  "Loudness": "target_loudness",
  "Speechiness": "target_speechiness",
  "Acousticness": "target_acousticness",
  "Instrumentalness": "target_instrumentalness",
  "Liveness": "target_liveness",
  "Valence": "target_valence"
};


const FilterCard: React.FC<FilterCardProps> = ({ title, description, sliderRange, settings, setSettings }) => {
  console.log(settings);

  return (
    <div className="flex justify-center items-center">
      <div className="w-[700px] h-[500px] bg-black p-4 flex flex-col rounded-2xl justify-evenly mb-36 mt-5">
        <h1 className="text-white text-2xl font-bold mb-2 text-[48px] text-center">{title}</h1>
        <p className="text-white mb-2 text-[32px] leading-8 text-center">{description}</p>
        <div className="flex justify-center">
          {sliderRange ? (
            <FilterSlider
              aria-label="Always visible"
              valueLabelDisplay="on"
              valueLabelFormat={valueLabelFormat}
              marks={Marks}
              step={50}
              min={0}
              max={100}
              value={settings[titleMap[title]]}
              onChange={(event: Event, value) => {
                setSettings({ ...settings, [titleMap[title]]: value as number });
              }}
            />
          ) : (
            <FilterSlider
              aria-label="Always visible"
              valueLabelDisplay="on"
              step={10}
              min={0}
              max={100}
              value={settings[titleMap[title]]}
              onChange={(event: Event, value) => {
                setSettings({ ...settings, [titleMap[title]]: value as number });
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterCard;