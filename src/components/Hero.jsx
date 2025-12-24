import React from "react";
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div className="h-[89.93%] w-full bg-black p-3 overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="h-full flex flex-col justify-center pt-50">
            <h1 className="font-thin tracking-widest text-8xl text-white">
              <span className="pl-33">DESIGN</span>
              <br />
              <span className="pl-65">& FREEDOM</span>
            </h1>
            <div className="flex items-center justify-center text-[#ffffff92]">
              <p className="text-base mt-6 pr-80">
                Explore Independent Style by Embracing Uniqueness <br /> with
                Our Exclusive Designer Apparel
              </p>
            </div>
            <div className="h-20 w-40 absolute right-[10%] top-[85%] flex items-center gap-3">
              <button className="px-1 py- rounded-[100%] bg-[#616161]">
                <i className="ri-arrow-down-line text-2xl text-[#BBBBAA]"></i>
              </button>
              <h1 className="uppercase text-white  text-sm">Learn More</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
