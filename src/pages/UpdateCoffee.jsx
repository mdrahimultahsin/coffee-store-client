import React from "react";
import {useLoaderData, useNavigate} from "react-router";
import updateCoffeeBg from "../images/more/11.png";
import {FaArrowLeftLong} from "react-icons/fa6";
import Swal from "sweetalert2";
const UpdateCoffee = () => {
  const coffeeData = useLoaderData();
  const {photo, suppiler, details, category, name, price, quantity, _id} =
    coffeeData || {};
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffeeData = Object.fromEntries(formData.entries());

    //update data
    fetch(`https://coffee-store-server-lovat-eight.vercel.app/coffees/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Coffee Updated Sunccessfully!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="p-6 mb-10 relative">
      <div
        className="absolute left-0 bg-no-repeat bg-cover w-full h-screen -z-1"
        style={{backgroundImage: `url(${updateCoffeeBg})`}}
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
          Update Existing Coffee Details
        </h1>
        <p className="text-primary-content opacity-70 mt-2">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form
          onSubmit={handleUpdate}
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
              defaultValue={name}
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
              defaultValue={quantity}
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
              defaultValue={suppiler}
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
              defaultValue={price}
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
              defaultValue={category}
              placeholder="Enter coffee Category"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Details
            </legend>
            <textarea
              className="input outline-none border-none focus:outline-none text-primary-content rounded-lg w-full py-2 min-h-15 box-border resize-none whitespace-pre-wrap break-words"
              name="details"
              placeholder="Enter coffee Details"
              defaultValue={details}
              id=""
            ></textarea>
          </fieldset>
          <fieldset className="fieldset col-span-full">
            <legend className="fieldset-legend text-lg font-semibold">
              Photo
            </legend>
            <input
              type="text"
              className="input outline-none border-none focus-none text-primary-content rounded-lg w-full"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo url"
            />
          </fieldset>
          <input
            className="mt-5 w-full col-span-full btn-secondary btn font-rancho text-xl text-black border-2 border-black hover:bg-base-300"
            type="submit"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
