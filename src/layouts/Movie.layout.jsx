import React from 'react'
import Navbar from "../Components/Navbar/navbar.component";

 const MovieLayout = (props) => {
  return <>
       <Navbar />
       {props.children}
  </>
}

export default MovieLayout;