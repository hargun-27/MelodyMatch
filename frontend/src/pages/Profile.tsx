import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  fetchProfile,
  getAccessToken,
  redirectToAuthCodeFlow,
} from "../components/Login";
import { set } from "react-hook-form";
import { get } from "http";
import FilterCarousel from "../components/FilterCarousel";
import Button from "../components/Button";
import { getRandomRecommendation } from "../api/api";
import { RecommendationOptions } from "../api/RecommendationOptions";

interface Image {
  url: string;
  height: number;
  width: number;
}

interface Profile {
  display_name: string;
  id: string;
  images: Image[];
  product: string;
}

const DefaultAccountCircleIcon = styled(AccountCircleIcon)({
  width: 80,
  height: 80,
});

const Profile = () => {
  const [accessToken, setAccessToken] = useState("");
  const [profile, setProfile] = useState({
    display_name: "",
    id: "",
    images: [{ url: "", height: "", width: "" }],
    product: "",
  });

  const [settings, setSettings] = useState<RecommendationOptions>({
    target_tempo: "",
    target_danceability: "",
    target_energy: "",
    target_loudness: "",
    target_speechiness: "",
    target_acousticness: "",
    target_instrumentalness: "",
    target_liveness: "",
    target_valence: "",
  });


  useEffect(() => {
    const fetchData = async () => {
      //get code from URL
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      //call getAccessToken method in login.ts to get access token
      if (code) {
        const token = await getAccessToken(code);

        //save token to local storage if token call exists
        if (token) {
          localStorage.setItem("token", token);
        }

        //get the token from local storage
        const localtoken = localStorage.getItem("token") || "";

        setAccessToken(localtoken);

        //call fetchProfile method in login.ts to get profile
        const profile = await fetchProfile(localtoken);
        setProfile(profile);

        const rec = await getRandomRecommendation(localtoken);

        console.log(rec);

        console.log("Profile:", profile);
      }
    };
    fetchData();
  }, []);

  const HandleSubmit = () => {
    console.log("Pressed");

    localStorage.setItem("setting", JSON.stringify(settings));
  }

  return (
    <div>
      <div className="p-6 w-screen">
        <div className="flex items-center bg-transparent p-4">
          {
            profile.images.length ?
              <img
                className="w-20 h-20 rounded-full mr-4"
                src={profile.images[0].url}
                alt="Profile"
              /> :
              <DefaultAccountCircleIcon className="rounded-full mr-4" />
          }
          <div className="text-left">
            <p className="font-bold text-3xl capitalize pb-2">{`${profile.display_name}'s Profile`}</p>
            <div className="flex text-xl">
              <p>You've listened to <strong>#</strong> songs from the 80 million songs on Spotify</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FilterCarousel settings = {settings} setSettings = {setSettings} filterCards={
          [
            {
              title: "Acousticness",
              description: "The acoustic nature of the track from a scale of 0 - 100. A value of 100 represents high confidence in its acoustic classification.",
              sliderRange: false,
            },
            {
              title: "Liveness",
              description: "The liveness value detects the presence of an audience, with higher values indicating a greater likelihood of a live performance.",
              sliderRange: false,
            },
            {
              title: "Danceability",
              description: "The danceability score rates a track's suitability for dancing on a scale from 0 (least danceable) to 100 (most danceable).",
              sliderRange: false,
            },
            {
              title: "Instrumentalness",
              description: "Predicts whether a track contains no vocals. Higher instrumentalness values indicate a greater likelihood of instrumental tracks with minimal or no vocals.",
              sliderRange: false,
            },
            {
              title: "Energy Level",
              description: "Energy is a perceptual measure of intensity and activity, where higher values indicate tracks that are typically fast, loud, and noisy.",
              sliderRange: false,
            },
            {
              title: "Valence",
              description: "A measure describing the musical positiveness conveyed by a track. The higher the value, the more positive the song.",
              sliderRange: false,
            },
            {
              title: "Loudness",
              description: "The overall loudness of a track in decibels (dB).",
              sliderRange: false,
            },
            {
              title: "BPM",
              description: "The overall estimated tempo of a track in beats per minute (BPM).",
              sliderRange: true,
            },
            {
              title: "Speechiness",
              description: "Speechiness identifies the presence of spoken words in a track, with higher values indicating more speech-like elements.",
              sliderRange: false,
            },
          ]
        }
        />
      </div>
      <div className="flex items-center justify-center">
        <Button
          onClick={HandleSubmit}
          className="max-w-sm !bg-spotifyBlack text-spotifyWhite text-[24px] font-bold px-12 rounded-xl hover:!bg-spotifyBlackSecondary"
        >
          Generate <span className="text-spotifyGreen">Now</span>
        </Button>
      </div>
    </div>
  );
};

export default Profile;
