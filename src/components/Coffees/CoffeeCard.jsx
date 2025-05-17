import React from "react";
import {FaEye, FaPen} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import {useNavigate} from "react-router";

const CoffeeCard = ({coffee, handleDelete}) => {
  const {name, suppiler, _id, photo, price} = coffee || {};
  const navigate = useNavigate();
  return (
    <div className="bg-base-300 p-4 md:px-8 rounded-lg flex items-center gap-3 md:gap-5">
      <img className="max-w-40" src={photo} alt="" />
      <div className="space-y-2 flex-1">
        <h1 className="font-semibold text-lg">
          Name: <span className="text-primary-content font-normal">{name}</span>
        </h1>
        <h1 className="font-semibold text-lg">
          Supplier:{" "}
          <span className="text-primary-content font-normal">{suppiler}</span>
        </h1>
        <h1 className="font-semibold text-lg">
          Price:
          <span className="text-primary-content font-normal">
            {" "}
            {price} Taka
          </span>
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate(`/coffees/${_id}`)}
          className="btn btn-secondary  text-lg btn-sm py-5"
        >
          <FaEye />
        </button>
        <button onClick={() => navigate(`/updateCoffee/${_id}`)} className="btn btn-secondary  bg-black text-lg btn-sm py-5">
          <FaPen />
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-secondary  bg-red-500 text-lg btn-sm py-5"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
