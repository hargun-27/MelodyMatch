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
        <div className="shadow-custom w-[500px] p-[6px] resize-none rounded-[30px] border border-spotifyWhite-300 bg-white">
          <img src={song.coverImage} alt={song.name} className="rounded-[30px]" />
          <div className="mt-[17px] mb-[15px] flex items-start justify-between text-spotifyWhite">
            <div className="ml-[22px]">
              <p className="font-bold underline text-[24px] text-spotifyBlack">{song.name}</p>
              <p className="font-bold text-black text-[20px]">{song.author}</p>
            </div>
            <Button onClick={handleClick} className="text-sm !bg-spotifyBlack text-spotifyWhite hover:!bg-spotifyBlackSecondary">Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
export type {Song};