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
    <div className="content">
      <div className="left-element">

      </div>
      <div className="right-element">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae tortor id justo fringilla fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris non nunc vitae enim tincidunt lacinia. Fusce in fringilla sapien, sit amet varius sapien.</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Log in to Spotify</button>
      </div>
    </div>
      
    </>
  );
};

export default Home;
