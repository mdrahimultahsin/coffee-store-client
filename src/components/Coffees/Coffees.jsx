import React, {useState} from "react";
import coffeeIcon from "../../images/icons/1.png";
import coffeeBg from "../../images/more/4.png";
import {Link, useLoaderData} from "react-router";
import CoffeeCard from "./CoffeeCard";
import Swal from "sweetalert2";

const Coffees = () => {
  const initalCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(initalCoffees);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-lovat-eight.vercel.app/coffees/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              setCoffees(coffees.filter((coffee) => coffee._id !== id));
            }
          });
      }
    });
  };
  return (
    <div className="mt-15 mb-40 text-center relative">
      <div className="  absolute top-4 bg-center h-50 md:h-60 object-cover ">
        <img className="w-full h-full object-cover" src={coffeeBg} alt="" />
      </div>
      <div className="px-4">
        <h2 className=" text-lg">--- Sip & Savor ---</h2>
        <h1 className="text-primary font-rancho mt-2 text-5xl shadow-text">
          Our Popular Products
        </h1>
        <Link to="/addCoffee">
          <button className="mt-4 btn btn-secondary hover:bg-white hover:text-black border-2 border-black text-white font-rancho text-xl py-5">
            Add Coffee <img className="max-w-8 ml-1" src={coffeeIcon} alt="" />
          </button>
        </Link>
      </div>

      <div className="mx-auto px-6 md:w-10/12 mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
        {coffees.length === 0 ? (
          <div className="flex items-center justify-center flex-col col-span-full text-center pt-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-700">
              No Coffee Found
            </h1>
            <p className="text-gray-500 mt-2">
              Try adding some coffee to get started ☕
            </p>
          </div>
        ) : (
          coffees?.map((coffee) => (
            <CoffeeCard
              coffee={coffee}
              handleDelete={handleDelete}
              key={coffee._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Coffees;
