import { Route,Routes } from "react-router-dom";
import DefaultHOC from "./HOC(Higher Order Components)/Default.HOC";
// import DefaultLayout from "./layouts/Default.layout";
import Temp from "./Components/temp";
// import Navbar from "./Components/Navbar/navbar.component";

function Name(){
  return <h1>Hello root</h1>
}

function Name2(){
  return <h1>Hello movie</h1>
}
function App() {
  return (
    <>
    {/* <h1>Hello</h1> */}
      {/* <DefaultLayout/> */}
      {/* <Navbar /> */}
      <DefaultHOC path="/"/>
      {/* <Routes> */}
      {/* <Route path="/" exact element={<h1>Hello</h1>}/> */}
      
      {/* </Routes> */}
      {/* <Route path="/movies" exact component={Name2}/> */}
    </>
  );
}

export default App;

