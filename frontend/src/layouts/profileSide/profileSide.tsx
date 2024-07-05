import React, {useContext} from "react";
import {DarkModeContext} from "../../context/navbarContext.js"
import "./profileSide.css";
import FollowerCard from "../../component/followerCard/followerCard.tsx";
import SearchBar from "../../component/searchBar/searchBar.tsx";
import ProfileCard from "../../component/profileCard/profileCard.tsx";
const profileSide = () => {
 const { DarkMode } = useContext(DarkModeContext);
  return (
    <div
      className="profileSide"
      style={{
        background: DarkMode ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,.6)",
        color: DarkMode ? "white" : "black"
      }}
    >
      <SearchBar />
      <ProfileCard />
      <FollowerCard />
    </div>
  );
};

export default profileSide;
