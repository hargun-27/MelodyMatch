import React, { useEffect, useState } from "react";
import {
  fetchProfile,
  getAccessToken,
  redirectToAuthCodeFlow,
} from "../components/Login";
import { set } from "react-hook-form";
import { get } from "http";

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

        console.log("Profile:", profile);
        console.log(profile.images[0]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div>
          <div className="flex items-center bg-gray-200 p-4">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={profile.images[0].url}
              alt="Profile"
            />
            <h2 className="text-lg font-semibold">{profile.display_name}</h2>
          </div>
          <div>
            <strong>id:</strong> {profile.id}
          </div>
          <div>
            <strong>Tier:</strong> {profile.product}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
