import React,{useContext} from "react";
import "./home.css";
import { DarkModeContext } from "../../context/navbarContext.js"
import ProfileSide from "../../layouts/profileSide/profileSide.tsx";
import PostSide from "../../layouts/postSide/postSide.tsx";
import RightSide from "../../layouts/rightSide/rightSide.tsx";
const home = () => {
 const { DarkMode } = useContext(DarkModeContext);
  return (
    <div
      className="home"
      style={{
        background: DarkMode ? "rgba(0,0,0,.6)" : "rgba(255,255,255,.6)",
        color: DarkMode ? "white" : "black"
      }}
    >
      <RightSide />
      <PostSide />
      <ProfileSide />
    </div>
  );
};

export default home;
