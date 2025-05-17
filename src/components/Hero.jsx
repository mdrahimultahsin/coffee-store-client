import React from "react";
import heroBg from "../images/more/3.png";
const Hero = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{backgroundImage: `url(${heroBg})`}}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center md:text-left flex-col md:flex-row p-4 ">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2 flex flex-col justify-center  items-center md:items-start">
          <h1 className="mb-5 text-4xl font-bold font-rancho">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="mb-5 ">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <div>
            <button className="btn btn-secondary text-black border-none text-xl font-rancho hover:bg-white">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
