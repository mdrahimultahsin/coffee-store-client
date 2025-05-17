import React from "react";
import logo from "../images/logo.png";
import headerBg from "../images/more/15.jpg";
import { Link } from "react-router";
const Header = () => {
  return (
    <div
      className="bg-cover bg-center w-full flex items-center justify-center py-1"
      style={{backgroundImage: `url(${headerBg})`}}
    >
      
      <Link to="/" className="flex text-white items-center gap-2 font-rancho text-5xl">
        <img className="w-16" src={logo} alt="" />
        Espresso Emporium
      </Link>
    </div>
  );
};

export default Header;
