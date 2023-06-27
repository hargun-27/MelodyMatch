import React, { useState } from "react";
import NavBar from "../components/Navbar";
import Button from "../components/Button";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import TEST_IAMGE from "../images/test.jpg";
import TEST_IAMGE1 from "../images/ag.jpeg";
import TEST_IAMGE2 from "../images/fm.jpg";
import TEST_IAMGE3 from "../images/drake.jpeg";
import TEST_IAMGE4 from "../images/yt.jpeg";

import { redirectToAuthCodeFlow, getAccessToken } from "../components/Login";

const Home = () => {
  const params = new URLSearchParams(window.location.search);
  const [code, setCode] = useState(params.get("code"));
  const EXAMPLEDATA = [
    { name: "Song name 1", author: "Kanye", coverImage: TEST_IAMGE },
    { name: "Song name 2", author: "Arianna Grande", coverImage: TEST_IAMGE1 },
    { name: "Song name 3", author: "Fleetwood Mac", coverImage: TEST_IAMGE2 },
    { name: "Song name 4", author: "Drake", coverImage: TEST_IAMGE3 },
    { name: "Song name 5", author: "Young Thug", coverImage: TEST_IAMGE4 },
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
        <div className="left-element absolute left-0 w-3/5 h-full bg-black flex flex-col items-center justify-center bg-black pb-40 pl-20">
          <Carousel songs={EXAMPLEDATA} />  
        </div>
        <div className="right-element absolute right-0 w-2/5 h-full bg-black flex flex-col items-center justify-center pr-10">
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