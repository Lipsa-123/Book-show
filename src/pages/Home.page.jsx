import React from "react";

//Componets
import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.component";

//Config
import TempPosters from "../Config/TempPosters.config";
const HomePage = () => {
    return (<>
        <div className="flex flex-col gap-6">
            <div className="container mx-auto px-10">
                <h1 className="text-2xl font-bold text-gray-800 my-3">The best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
            <div className="bg-bms-800 py-12">
                <div className="container mx-auto px-12 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" alt="Premier and Rupay" className="w-full h-full" />
                    </div>
                    <PosterSlider images={TempPosters} title="Premiers" subtitle="Brand new releases every friday" isDark/>
                </div>
            </div>
        </div>
        
        <div className="container mx-auto px-12 my-8">
            <PosterSlider images={TempPosters} title="Online streaming evnets" isDark={false}/>
        </div>

        <div className="container mx-auto px-12 my-8">
            <PosterSlider images={TempPosters} title="Outdoor evnets" isDark={false}/>
        </div>
    </>)
}
export default HomePage;