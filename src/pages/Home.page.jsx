import React from "react";

//Componets
import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";
const HomePage = () =>{
    return (<>
    <div className="container mx-auto px-10">
    <h1 className="text-2xl font-bold text-gray-800 my-3">The best of Entertainment</h1>
    <EntertainmentCardSlider/>
    </div>
        
    </>)
}
export default HomePage;