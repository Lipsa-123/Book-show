import React from "react";
// import Temp from "../Components/temp";
import HomePage from "../pages/Home.page";
// Components
import Navbar from "../Components/Navbar/navbar.component";
import HeroCarousal from "../Components/HeroCarousal/HeroCarousal.component";
const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      {/* <h1 className="text-2xl">Default Layout</h1> */}
      {/* {props.children} */} 
      <HeroCarousal/>
      {/* <Temp/> */}
      <HomePage/>
    </>
  );
};

export default DefaultLayout;