import React, { useEffect, useState } from "react";
import { redirectToAuthCodeFlow, getAccessToken, fetchProfile } from "../components/Login";

const Home = () => {
  const params = new URLSearchParams(window.location.search)
  const [code, setCode] = useState(params.get("code"));

  
  useEffect(() => {
    if (!code) {
      redirectToAuthCodeFlow();
      setCode(params.get("code"));
    } else {
      alert("Logged in");
      const accessToken = getAccessToken(code);
    }
  }, [code]);


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
