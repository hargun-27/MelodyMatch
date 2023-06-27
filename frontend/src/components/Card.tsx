import React from "react";
import Button from "./Button";

interface Song {
  name: string;
  author: string;
  coverImage: string;
}

interface CardProps {
  song: Song;
}

const Card: React.FC<CardProps> = ({ song }) => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="">
      <div className="mb-4">
        <div className="w-[500px] p-[6px] resize-none rounded-[25px] border border-gray-300 bg-black">
          <img src={song.coverImage} alt={song.name} className="rounded-[25px]" />
          <div className="mt-[17px] mb-[15px] flex items-start justify-between text-white">
            <div className="ml-[22px]">
              <p className="font-bold underline text-[17px]">{song.name}</p>
              <p className="font-bold">{song.author}</p>
            </div>
            <Button onClick={handleClick} className="mr-[22px] text-sm">Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
export type {Song};