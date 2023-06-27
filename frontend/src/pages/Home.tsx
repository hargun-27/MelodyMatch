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
      <div className="right-element absolute right-0 w-1/3 h-full bg-gray-200 flex flex-col items-center justify-center">
        <p className="p-8 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae tortor id justo fringilla fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris non nunc vitae enim tincidunt lacinia. Fusce in fringilla sapien, sit amet varius sapien.</p>
        
        <Button onClick={handleLogIn} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Log in to Spotify</Button>
      </div>
    </div>
      
    </>
  );
};

export default Home;
