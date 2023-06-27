import React, { useState } from "react";
import TEST_IAMGE from "../images/test.jpg";

interface Songs {
  name: string;
  author: string;
}

const Card = () => {
  const EXAMPLEDATA = [
    { name: "song1", author: "author1" },
    { name: "song2", author: "author2" },
  ];

  const [songs, setSongs] = useState<Songs[]>(EXAMPLEDATA);

  return (
    <div className=''>
      {songs.map((song) => (
        <div className='mb-4'>
          <div className='w-[550px] p-[6px] resize-none rounded-[25px] border border-gray-300'>
            <img src={TEST_IAMGE} alt={song.name} className='rounded-[25px]' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
