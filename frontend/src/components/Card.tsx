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
        <div className="w-[500px] p-[6px] resize-none rounded-[30px] border border-white-300 bg-white">
          <img src={song.coverImage} alt={song.name} className="rounded-[30px]" />
          <div className="mt-[17px] mb-[15px] flex items-start justify-between text-white">
            <div className="ml-[22px]">
              <p className="font-bold underline text-[17px] text-black">{song.name}</p>
              <p className="font-bold text-black">{song.author}</p>
            </div>
            <Button onClick={handleClick} className="mr-[22px] text-sm bg-spotifyBlack text-white">Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
export type {Song};