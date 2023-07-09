import React, { useEffect, useState } from "react";
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

const Profile = () => {
  const [accessToken, setAccessToken] = useState("");
  const [profile, setProfile] = useState({
    display_name: "",
    id: "",
    images: [{ url: "", height: "", width: "" }],
    product: "",
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
        console.log(profile.images[0]);
      }
    };
    fetchData();
  }, []);

  const HandleLogin = () => {
    console.log("Pressed");
  }

  return (
    <div>
      <div className="p-6 w-screen">
        <div className="flex items-center bg-transparent p-4">
          <img
            className="w-20 h-20 rounded-full mr-4"
            src={profile.images[0].url}
            alt="Profile"
          />
          <div className="text-left">
            <p className="font-bold text-3xl capitalize pb-2">{`${profile.display_name}'s Profile`}</p>
            <div className="flex text-xl">
              <p>You've listened to <strong>#</strong> songs from the 80 million songs on Spotify</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FilterCarousel filterCards={
          [
            {
              title: "Acousticness",
              description: "The acoustic nature of the track from a scale of 0 - 100. A value of 100 represents high confidence in its acoustic classification."
            },
            {
              title: "Liveness",
              description: "The liveness value detects the presence of an audience, with higher values indicating a greater likelihood of a live performance."
            },
            {
              title: "Danceability",
              description: "The danceability score rates a track's suitability for dancing on a scale from 0 (least danceable) to 100 (most danceable)."
            },
            {
              title: "Instrumentalness",
              description: "Predicts whether a track contains no vocals. Higher instrumentalness values indicate a greater likelihood of instrumental tracks with minimal or no vocals."
            },
            {
              title: "Energy Level",
              description: "Energy is a perceptual measure of intensity and activity, where higher values indicate tracks that are typically fast, loud, and noisy."
            },
            {
              title: "Valence",
              description: "A measure describing the musical positiveness conveyed by a track. The higher the value, the more positive the song."
            },
            {
              title: "Loudness",
              description: "The overall loudness of a track in decibels (dB)."
            },
            {
              title: "BPM",
              description: "The overall estimated tempo of a track in beats per minute (BPM)."
            },
            {
              title: "Speechiness",
              description: "Speechiness identifies the presence of spoken words in a track, with higher values indicating more speech-like elements."
            },
          ]
        }
        />
      </div>
      <div className="flex items-center justify-center">
        <Button
          onClick={HandleLogin}
          className="max-w-sm !bg-spotifyBlack text-spotifyWhite text-[24px] font-bold px-12 rounded-xl hover:!bg-spotifyBlackSecondary"
        >
          Generate <span className="text-spotifyGreen">Now</span>
        </Button>
      </div>
    </div>
  );
};

export default Profile;
