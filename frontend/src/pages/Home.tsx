import React from "react";
import NavBar from "../components/Navbar";
import Button from "../components/Button";

const Home = () => {
  const handleLogIn = () => {
    console.log('Button clicked!');
  };


  return (
    <>
    <NavBar />
      <h1>Discover your perfect soundtrack. Scroll your way to music bliss with MusicMatch</h1>
      <p>
        Personalized recommendations await as you embark on a journey to find your next favorite song. Log in NOW and unlock a world of musical possibilities.
      </p>
      {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Log in to Spotify</button> */}
      <Button onClick={handleLogIn}>Log in to Spotify</Button>
    </>
  );
};

export default Home;
