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
        <div className="left-element absolute left-0 w-2/3 h-full bg-black flex flex-col items-center justify-center bg-black"></div>
        <div className="right-element absolute right-0 w-1/3 h-full bg-black flex flex-col items-center justify-center">
          <p className="mx-12 my-3 text-center text-3xl text-white font-bold">
            Discover your perfect soundtrack. Scroll your way to music bliss with
            <span className="text-spotifyGreen"> Melody Match.</span>{" "}
          </p>
          <p className="mx-12 my-3 text-center text-white">
            Personalized recommendations await as you embark on a journey to find your next favorite song. Log in now
            and unlock a world of musical possibilities.
          </p>
          <Button
            onClick={HandleLogin}
            className="max-w-sm bg-white text-spotifyBlack font-bold py-2 px-4 rounded-xl hover:bg-slate-200"
          >
            Log in to <span className="text-spotifyGreen">Spotify</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;