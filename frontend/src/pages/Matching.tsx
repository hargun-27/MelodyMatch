import React from 'react';
import InfoCard from '../components/InfoCard';
import Card from '../components/Card';
import Image from '../images/pixelbath.jpeg';

const Matching = () => {
  const setting = localStorage.getItem("setting");
  console.log(setting);

  // Song info but nothing is legit yet
  const songInfo = {
    genre: 'Song Name',
    artist: 'Artist Name',
    album: 'Album Name',
    listeningCount: '100',
    songLength: '3:30',
    acousticness: 0.75,
    danceability: 0.85,
    instrumentalness: 0.2,
    energyLevel: 0.9,
    valence: 0.8,
    liveness: 0.6,
    BPM: 120,
    speechiness: 0.1,
    loudness: -6.2,
  };

  const song = {
    name: 'Joji',
    author: 'Joji',
    coverImage: Image,
  }

  return (
    <div>
      <InfoCard songInfo={songInfo} />
    </div>
  );
};

export default Matching;
