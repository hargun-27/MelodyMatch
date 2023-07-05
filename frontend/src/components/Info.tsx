import React from "react";

interface SongInfo {
  name: string;
  author: string;
  album: string;
  listeningCount: string;
  songLength: string;
  filteringScore: number;
  acousticness: number;
  danceability: number;
  instrumentalness: number;
  energyLevel: number;
  valence: number;
  liveness: number;
  BPM: number;
  speechiness: number;
  loudness: number;
}

const SongComponent: React.FC<{ songInfo: SongInfo }> = ({ songInfo }) => {
  return (
    <div className="song-component bg-white p-4 rounded-[30px]">
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Name:</span>
        <span className="value">{songInfo.name}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Author:</span>
        <span className="value">{songInfo.author}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Album:</span>
        <span className="value">{songInfo.album}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Listening Count:</span>
        <span className="value">{songInfo.listeningCount}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Song Length:</span>
        <span className="value">{songInfo.songLength}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Filtering Score:</span>
        <span className="value">{songInfo.filteringScore}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Acousticness:</span>
        <span className="value">{songInfo.acousticness}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Danceability:</span>
        <span className="value">{songInfo.danceability}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Instrumentalness:</span>
        <span className="value">{songInfo.instrumentalness}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Energy Level:</span>
        <span className="value">{songInfo.energyLevel}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Valence:</span>
        <span className="value">{songInfo.valence}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Liveness:</span>
        <span className="value">{songInfo.liveness}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">BPM:</span>
        <span className="value">{songInfo.BPM}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Speechiness:</span>
        <span className="value">{songInfo.speechiness}</span>
      </div>
      <div className="song-info-row flex">
        <span className="label font-bold mr-2">Loudness:</span>
        <span className="value">{songInfo.loudness}</span>
      </div>
    </div>
  );
};

export default SongComponent;