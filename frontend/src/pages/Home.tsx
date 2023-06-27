import React, { useState } from "react";
import NavBar from "../components/Navbar";
import Button from "../components/Button";
import { redirectToAuthCodeFlow, getAccessToken } from "../components/Login";

const Home = () => {
  const params = new URLSearchParams(window.location.search);
  const [code, setCode] = useState(params.get("code"));
  
  const HandleLogin = () => {
    if (!code) {
      redirectToAuthCodeFlow();
      setCode(params.get("code"));
    } else {
      alert("Logged in");
      const accessToken = getAccessToken(code);
    }
  }

  return (
    <>
      <NavBar />
      <div className="content">
        <div className="left-element"></div>
        <div className="right-element absolute right-0 w-1/3 h-full bg-gray-200 flex flex-col items-center justify-center">
          <p className="mx-12 my-3 text-center text-3xl font-bold">
            Discover your perfect soundtrack. Scroll your way to music bliss with Melody Match.{" "}
          </p>
          <p className="mx-12 my-3 text-center">
            Personalized recommendations await as you embark on a journey to find your next favorite song. Log in NOW
            and unlock a world of musical possibilities.
          </p>
          <Button
            onClick={HandleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Log in to Spotify
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;