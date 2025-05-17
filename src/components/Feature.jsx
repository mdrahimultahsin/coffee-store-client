import React from "react";
import icon1 from "../images/icons/1.png";
import icon2 from "../images/icons/2.png";
import icon3 from "../images/icons/3.png";
import icon4 from "../images/icons/4.png";
const Feature = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto justify-center items-center p-4">
      <div className="space-y-2 p-2">
        <img className="w-17" src={icon1} alt="" />
        <h1 className="font-rancho text-3xl">Awesome Aroma</h1>
        <p>You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
      <div className="space-y-2 p-2">
        <img className="w-17" src={icon2} alt="" />
        <h1 className="font-rancho text-3xl">High Quality</h1>
        <p>We served the coffee to you maintaining the best quality</p>
      </div>
      <div className="space-y-2 p-2">
        <img className="w-17" src={icon3} alt="" />
        <h1 className="font-rancho text-3xl">Pure Grades</h1>
        <p>The coffee is made of the green coffee beans which you will love</p>
      </div>
      <div className="space-y-2 p-2">
        <img className="w-17" src={icon4} alt="" />
        <h1 className="font-rancho text-3xl">Proper Roasting</h1>
        <p>Your coffee is brewed by first roasting the green coffee beans</p>
      </div>
      
    </div>
  );
};

export default Feature;
