import React from 'react'
import { Route, Routes } from "react-router-dom";

import MovieLayout from '../layouts/Movie.layout';
const MovieHOC = ({ component: Component, ...rest }) => {
    return (
      <>
       <Routes>
       <Route
          {...rest} 
          element={<MovieLayout/>}
        />
       </Routes>
        
      </>
    );
  };

export default MovieHOC