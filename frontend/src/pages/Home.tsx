import React, { useEffect } from "react";
import { redirectToAuthCodeFlow, getAccessToken, fetchProfile } from "../components/Login";

const Home = () => {
  const clientId = "ef0a7468438c4842bb8b6aefb9694e42";
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    redirectToAuthCodeFlow(clientId);
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
  });

  return (
    <>
      <h1>Discover your perfect soundtrack. Scroll your way to music bliss with MusicMatch</h1>
      <p>
        Personalized recommendations await as you embark on a journey to find your next favorite song. Log in NOW and unlock a world of musical possibilities.
      </p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Log in to Spotify</button>
    </>
  );
};

export default Home;
