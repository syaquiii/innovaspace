import React from "react";

const Hero = () => {
  return (
    <div className="bg-home w-full flex items-center justify-center ">
      <div className=" lg:w-[85vh] w-[45vh] h-[20vh]   lg:h-[40vh] lg:mt-10 relative text-white">
        <h1 className="font-bold text-[8vh] lg:text-[16vh] absolute top-0">
          Innova
        </h1>
        <h1 className="font-bold  text-[8vh] lg:text-[16vh] absolute right-0 lg:right-0 bottom-0">
          Space
        </h1>
        <h4 className="lg:w-[45vh] w-[22vh] text-[1.5vh] text-right -left-6 bottom-6 lg:bottom-[8vh] absolute font-semibold lg:-left-[14vh] lg:text-[3vh]">
          Find your space and innovate
        </h4>
      </div>
    </div>
  );
};

export default Hero;
