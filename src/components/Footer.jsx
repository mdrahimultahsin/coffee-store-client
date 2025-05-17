import React from "react";
import logo from "../images/logo.png";
import footerBg from "../images/more/15.jpg";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="mt-15 footer sm:footer-horizontal  md:w-10/12 mx-auto p-6 py-10">
        <div>
          <a className="flex flex-col text-black shadow-text gap-2 font-rancho text-4xl">
            <img className="w-16" src={logo} alt="" />
            Espresso Emporium
          </a>

          <p className="text-primary-content">
            Always ready to be your friend. Come & Contact with us to share your{" "}
            <br />
            memorable moments, to share with your best companion.
          </p>
          <div className="mt-3 flex gap-4">
            <a
              target="_blank"
              className="bg-primary text-white p-2 text-lg rounded-full"
              href="https://www.facebook.com"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              className="bg-primary text-white p-2 text-lg rounded-full"
              href="https://www.facebook.com"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              className="bg-primary text-white p-2 text-lg rounded-full"
              href="https://www.facebook.com"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              className="bg-primary text-white p-2 text-lg rounded-full"
              href="https://www.facebook.com"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="mt-4 space-y-2">
            <h1 className="text-black shadow-text font-rancho text-4xl">
              Get in Touch
            </h1>
            <h1 className="flex items-center gap-3 text-lg ">
              <FaPhone />
              <span className="text-primary-content">+8801234567891</span>
            </h1>
            <h1 className="flex items-center gap-3 text-lg ">
              <FaEnvelope />
              <span className="text-primary-content">info@gmail.com</span>
            </h1>
            <h1 className="flex items-center gap-3 text-lg ">
              <FaLocationArrow />
              <span className="text-primary-content">
                72, Wall street, King Road, Dhaka
              </span>
            </h1>
          </div>
        </div>
        <div>
          <h1 className="text-black shadow-text font-rancho text-4xl">
            Contact with Us
          </h1>
          <div className="mt-5 space-y-4">
            <input
              className="w-full bg-white text-accent input focus-border-none border-none"
              type="text"
              name="Name"
              placeholder="Name"
            />
            <input
              className="w-full bg-white text-accent input focus-border-none border-none"
              type="email"
              name="Email"
              placeholder="Email"
            />
            <textarea
              className="w-full bg-white text-accent input focus-border-none border-none min-h-20 py-4"
              placeholder="Message"
              name="message"
              id=""
            ></textarea>
            <input
              className="btn btn-outline rounded-full hover:bg-primary hover:text-white "
              type="submit"
              value="Send Message"
            />
          </div>
        </div>
      </div>
      <div
        style={{backgroundImage: `url(${footerBg})`}}
        className="py-4 text-center text-white"
      >
        <p>Copyright Espresso Emporium ! All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
