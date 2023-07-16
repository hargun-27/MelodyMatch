import React from "react";

interface SongInfo {
  genre: string;
  artist: string;
  album: string;
  listeningCount: string;
  songLength: string;
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

const InfoCard: React.FC<{ songInfo: SongInfo }> = ({ songInfo }) => {
  return (
    <div className="flex items-center justify-end h-screen bg-gray-100">
      <div className="w-1/3 bg-white p-16 m-4 h-[95%] rounded-[30px] flex flex-col justify-between">
        <div className="font-bold text-center !text-2xl mb-4">Song Information</div>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">Genre:</span>
          <span className="value text-2xl">{songInfo.genre}</span>
        </div>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">Artist:</span>
          <span className="value text-2xl">{songInfo.artist}</span>
        </div>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">Album:</span>
          <span className="value text-2xl">{songInfo.album}</span>
        </div>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">Listening Count:</span>
          <span className="value text-2xl">{songInfo.listeningCount}</span>
        </div>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">Song Length:</span>
          <span className="value text-2xl">{songInfo.songLength}</span>
        </div>
        <span className="font-bold text-center !text-2xl mt-4 mb-4">Filtering Scores</span>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">Acousticness:</span>
          <span className="value text-2xl">{songInfo.acousticness}</span>
        </div>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">Danceability:</span>
          <span className="value text-2xl">{songInfo.danceability}</span>
        </div>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">Instrumentalness:</span>
          <span className="value text-2xl">{songInfo.instrumentalness}</span>
        </div>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">Energy Level:</span>
          <span className="value text-2xl">{songInfo.energyLevel}</span>
        </div>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">Valence:</span>
          <span className="value text-2xl">{songInfo.valence}</span>
        </div>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">Liveness:</span>
          <span className="value text-2xl">{songInfo.liveness}</span>
        </div>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">BPM:</span>
          <span className="value text-2xl">{songInfo.BPM}</span>
        </div>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">Speechiness:</span>
          <span className="value text-2xl">{songInfo.speechiness}</span>
        </div>
        <div className="song-info-row flex">
          <span className="label font-bold mr-2 text-2xl">Loudness:</span>
          <span className="value text-2xl">{songInfo.loudness}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;