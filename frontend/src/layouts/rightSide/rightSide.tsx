import React, { useState, useContext } from "react";
import { NavbarContext, DarkModeContext } from "../../context/navbarContext.js";
import Navbar from "../../component/navbar/navbar.tsx";
import "./rightSide.css";
const rightSide = () => {
  const { isshown } = useContext(NavbarContext);
  const { DarkMode } = useContext(DarkModeContext);
  console.log(isshown);
  return (
    <div
      className="rightSide"
      style={{
        width: isshown ? "10rem" : "2rem",
        background: DarkMode ? "rgba(0,0,0,.4)" : "rgba(255,255,255,.6)",
        color: DarkMode ? "white" : "black"
      }}
    >
      <Navbar />
    </div>
  );
};

export default rightSide;
