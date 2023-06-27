import React, { useState } from "react";

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
        <div>{song.name}</div>
      ))}
    </div>
  );
};

export default Card;
