import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clock from "../components/LandingPages/Clock.js"
import About from "../components/LandingPages/About.js";
import TopIndustry from "../components/LandingPages/TopIndustries.js";
import PhotoGrid from "../components/LandingPages/PhotoGrid.js";



const Home = () => {





  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    { id: 1, image: "HomeBg1.jpg", alt: "Slide 1" },
    { id: 2, image: "HomeBg2.jpg", alt: "Slide 2" },
    { id: 3, image: "HomeBg3.jpg",  alt: "Slide 3" },
  ];

  return (
    <>
    <Clock/>
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings} className="w-full h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-screen">
            <img
              src={slide.image}
              alt={slide.alt}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Slider>
    </div>
    
    <About/>
    <TopIndustry/>
    <PhotoGrid/>


    </>
  );
};

 
export default Home