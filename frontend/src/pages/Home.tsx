import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar";
import Button from "../components/Button";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import IMAGE1 from "../images/graduation.jpg";
import IMAGE2 from "../images/ag.jpeg";
import IMAGE3 from "../images/blond.jpg";
import IMAGE4 from "../images/ballads.jpg";
import IMAGE5 from "../images/pixelbath.jpeg";

import { redirectToAuthCodeFlow, getAccessToken } from "../components/Login";

const Home = () => {
  const params = new URLSearchParams(window.location.search);
  const [code, setCode] = useState(params.get("code"));
  const DATA = [
    { name: "Graduation", author: "Kanye", coverImage: IMAGE1 },
    { name: "Sweetner", author: "Arianna Grande", coverImage: IMAGE2 },
    { name: "Blond", author: "Frank Ocean", coverImage: IMAGE3 },
    { name: "Ballads 1", author: "Joji", coverImage: IMAGE4 },
    { name: "Pixel Bath", author: "Jean Dawson", coverImage: IMAGE5 },
  ];

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
        <div className="left-element absolute left-0 w-3/5 h-[calc(100vh-60px)] overflow-hidden bg-black flex flex-col items-center justify-center bg-black pb-40 pl-20">
          <Carousel songs={DATA} />
        </div>
        <div className="right-element absolute right-0 w-2/5 h-[calc(100vh-60px)] overflow-hidden bg-black flex flex-col items-center justify-center pr-10">
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
            className="max-w-sm bg-white text-spotifyBlack text-lg font-bold py-2 px-8 rounded-xl hover:bg-slate-200"
          >
            Log in to <span className="text-spotifyGreen">Spotify</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;