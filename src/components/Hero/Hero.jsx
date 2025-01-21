import React from "react";
import Image1 from "../../assets/hero/Image-Homme-1.jpg";
import Image2 from "../../assets/hero/Image-Homme-2.jpg";
import Image3 from "../../assets/hero/Image-Homme-3.jpg";
import black from "../../assets/hero/black-panther.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Test 1",
    description: "Description 1",
  },
  {
    id: 2,
    img: Image2,
    title: "Test 2",
    description: "Description 2",
  },
  {
    id: 3,
    img: Image3,
    title: "Test 3",
    description: "Description 3",
  },
];

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex
    justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
    >
      {/* background design */}
      <div
        className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 
        right-0 rounded-3xl rotate-45 -z-9
         "
      ></div>
      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div 
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left
            order-2 sm:order-1 relative z-10"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Test{" "}
              </h1>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam, nemo!
              </p>
              <div>
                <button
                  className="bg-gradient-to-r from-primary to-secondary 
                        hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* image section */}
            <div 
            className="order-1 sm:order-2"
            >
                <div 
                className="relative z-10">
                    <img src={black} alt="" 
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125
                     object-contain mx-auto"
                    />
                </div>
            </div>
          </div>
        </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
