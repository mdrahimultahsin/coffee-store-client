import React from "react";
import {useLoaderData, useNavigate} from "react-router";
import addCoffeeBg from "../images/more/11.png";
import coffeeIcon from "../images/more/19.png"
import {FaArrowLeftLong} from "react-icons/fa6";
const CoffeeDetails = () => {
  const coffeeData = useLoaderData();

  const {photo, suppiler, details, category, name,quantity, price} = coffeeData || {};
  const navigate = useNavigate();
  return (
    <div className="p-6 relative">
      <div
        className="absolute left-0 bg-no-repeat bg-cover w-full h-screen -z-1"
        style={{backgroundImage: `url(${addCoffeeBg})`}}
      ></div>
      <div className="md:w-10/12 mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="font-rancho text-2xl btn bg-transparent shadow-none border-none shadow-text"
        >
          {" "}
          <FaArrowLeftLong size={18} />
          Back To Home
        </button>
      </div>
      <div className="md:w-10/12 mx-auto mt-5 p-6 md:px-20 bg-base-200 text-left rounded-lg flex flex-col md:flex-row gap-6 md:gap-10 items-center py-8">
        <div className="md:w-1/2">
          <img className="w-80 md:w-full" src={photo} alt="" />
        </div>
        <div className="space-y-2">
                <img className="w-20" src={coffeeIcon} alt="" />
          <h1 className="font-semibold text-lg">
            Name:{" "}
            <span className="text-primary-content font-normal">{name}</span>
          </h1>
          <h1 className="font-semibold text-lg">
            Price:{" "}
            <span className="text-primary-content font-normal">
              {price} Taka
            </span>
          </h1>
          <h1 className="font-semibold text-lg">
            Quantity:{" "}
            <span className="text-primary-content font-normal">
              {quantity} 
            </span>
          </h1>
          <h1 className="font-semibold text-lg">
            Supplier:{" "}
            <span className="text-primary-content font-normal">{suppiler}</span>
          </h1>
          <h1 className="font-semibold text-lg">
            Category:{" "}
            <span className="text-primary-content font-normal">{category}</span>
          </h1>
          <h1 className="font-semibold text-lg">
            Details:{" "}
            <span className="text-primary-content font-normal">{details}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
