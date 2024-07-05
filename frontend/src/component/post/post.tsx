import React, { useContext } from "react";
import "./post.css";
import { DarkModeContext } from "../../context/navbarContext.js";
import { Mail, Send, Heart } from "lucide-react";
import postData from "../../data/postList.js";
const post = () => {
  const { DarkMode } = useContext(DarkModeContext);
  return (
    <div
      className="post-container"
      style={{
        background: DarkMode ? "rgba(0,0,0,.2)" : "rgba(255,255,255,.8)",
        color: DarkMode ? "white" : "black"
      }}
    >
      {postData.map((item, idx) => {
        return (
          <div
            key={idx}
            className="post-card"
      
          >
            <img className="post-image" src={item.image} />
            <div className="description">
              <div className="postReact">
                <Mail />
                <Send />
                <Heart stroke={0} fill={item.liked ? "crimson" : "white"} />
              </div>
              <div className="numberOfLiked">
                <span>liked</span>: {item.likeCount}
              </div>
              {item.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default post;
