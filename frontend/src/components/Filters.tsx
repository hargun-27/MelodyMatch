import React from 'react';

interface FilterCardProps {
  title: string;
  description: string;
}

const FilterCard: React.FC<FilterCardProps> = ({ title, description }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[800px] h-[600px] bg-black p-4 flex flex-col rounded-2xl justify-evenly">
        <h1 className="text-white text-2xl font-bold mb-2 text-[48px] text-center">{title}</h1>
        <p className="text-white mb-2 text-[32px] leading-8 text-center">{description}</p>
        <div className="flex justify-center">
          <input
            type="range"
            min="0"
            max="100"
            className="w-4/5 appearance-none cursor-pointer bg-gray-300 h-5 rounded-full overflow-hidden [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[40px] [&::-webkit-slider-thumb]:w-[40px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-spotifyGreen"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterCard;