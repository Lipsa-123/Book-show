import React from "react";
import HeroSlider from "react-slick";

//COMPONENT
import { NextArrow, PrevArrow } from "./Arrows.component";



const HeroCarousal = () => {

    const settingLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        dots: true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
    };
    const settings = {
        arrows: true,
        // centerMode: true,
        // centerPadding: "200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
    };

    const images = ["https://images.unsplash.com/photo-1643881195901-65c5f355fb86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1643747980307-af9dcbd1e333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
        "https://images.unsplash.com/photo-1643874133310-60b5e9304e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        "https://images.unsplash.com/photo-1643821042399-19d2d3c9e63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1643861026585-ce09e18b9cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    ];
    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-56 md: h-80 py-3">
                            <img src={image} alt="testing" className="w-full h-full rounded-md" />
                        </div>
                    ))}
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingLG}>
                    {images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img src={image} alt="testing" className="w-full h-full rounded-md" />
                        </div>
                    ))}
                </HeroSlider>
            </div>

        </>
    );
};

export default HeroCarousal;