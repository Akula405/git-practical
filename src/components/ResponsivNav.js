import React from "react";
import "../utils/nav.css";
import { navLogo } from "../utils/constants";
import { FaBars } from "react-icons/fa";
//import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const ResponsivNav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((p) => !p);
  };
  return (
    <div className="navigation ">
      <div>{navLogo}</div>
      <ul className={isClicked && "mobileNav"}>
        <li>Home</li>
        <li>Blogs</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="hamburg" onClick={handleClick}>
        {<FaBars />}
      </div>
    </div>
  );
};

export default ResponsivNav;
