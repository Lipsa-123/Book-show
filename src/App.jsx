import { Route,Routes } from "react-router-dom";
//HOC
import DefaultHOC from "./HOC(Higher Order Components)/Default.HOC";
import MovieHOC from "./HOC(Higher Order Components)/Movie.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/"/>
      <MovieHOC path="/movie/:id" />
    </>
  );
}

export default App;

