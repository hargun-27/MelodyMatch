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
        <div className="shadow-custom w-85 p-[6px] resize-none rounded-[30px] border border-white-300 bg-white">
          {/* make inner border radius = padding of card */}
          <img src={song.coverImage} alt={song.name} className="rounded-[24px] inset-0 object-cover" loading="lazy" />
          <div className="mt-[17px] mb-[15px] flex items-start justify-between text-white">
            <div className="ml-[22px]">
              <p className="font-bold underline text-[24px] text-spotifyBlack">{song.name}</p>
              <p className="font-bold text-black text-[20px]">{song.author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
export type {Song};