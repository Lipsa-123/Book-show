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
      <HeroCarousal/>
      <HomePage/>
    </>
  );
};

export default DefaultLayout;