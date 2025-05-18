import React from "react";
import {FaArrowLeftLong} from "react-icons/fa6";
import addCoffeeBg from "../images/more/11.png";
import {useNavigate} from "react-router";
import Swal from "sweetalert2";
const AddCoffee = () => {
  const navigate = useNavigate();
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData);

    //send data in DB
    fetch("https://coffee-store-server-lovat-eight.vercel.app/coffees", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Sunccessfully!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="p-6 mb-10 relative">
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
      <div className="md:w-10/12 mx-auto mt-5 p-10 bg-base-200 text-center rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-rancho shadow-text">
          Add New COffee
        </h1>
        <p className="text-primary-content opacity-70 mt-2">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form
          onSubmit={handleAddCoffee}
          className="text-left mt-5 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6"
          action=""
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Name
            </legend>
            <input
              type="text"
              className="input outline-none border-none focus-none text-primary-content rounded-lg w-full"
              name="name"
              placeholder="Enter coffee name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Qunatity
            </legend>
            <input
              type="text"
              className="input outline-none border-none focus-none text-primary-content rounded-lg w-full"
              name="quantity"
              placeholder="Enter Quantity"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Supplier
            </legend>
            <input
              type="text"
              className="input outline-none border-none focus-none text-primary-content rounded-lg w-full"
              name="suppiler"
              placeholder="Enter coffee supplier"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Price
            </legend>
            <input
              type="text"
              className="input outline-none border-none focus-none text-primary-content rounded-lg w-full"
              name="price"
              placeholder="Enter coffee Price"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Category
            </legend>
            <input
              type="text"
              className="input outline-none border-none focus-none text-primary-content rounded-lg w-full"
              name="category"
              placeholder="Enter coffee Category"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Details
            </legend>
            <input
              type="text"
              className="input outline-none border-none focus-none text-primary-content rounded-lg w-full"
              name="details"
              placeholder="Enter coffee Details"
            />
          </fieldset>
          <fieldset className="fieldset col-span-full">
            <legend className="fieldset-legend text-lg font-semibold">
              Photo
            </legend>
            <input
              type="text"
              className="input outline-none border-none focus-none text-primary-content rounded-lg w-full"
              name="photo"
              placeholder="Enter photo url"
            />
          </fieldset>
          <input
            className="mt-5 w-full col-span-full btn-secondary btn font-rancho text-xl text-black border-2 border-black hover:bg-base-300"
            type="submit"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
