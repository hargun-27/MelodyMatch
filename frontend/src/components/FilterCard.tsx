import React from 'react';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

interface FilterCardProps {
  title: string;
  description: string;
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
});

const FilterCard: React.FC<FilterCardProps> = ({ title, description }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[800px] h-[600px] bg-black p-4 flex flex-col rounded-2xl justify-evenly">
        <h1 className="text-white text-2xl font-bold mb-2 text-[48px] text-center">{title}</h1>
        <p className="text-white mb-2 text-[32px] leading-8 text-center">{description}</p>
        <div className="flex justify-center">
          <FilterSlider
            defaultValue={0}
            aria-label="Always visible"
            valueLabelDisplay="on"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterCard;