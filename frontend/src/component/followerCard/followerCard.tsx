import React from "react";
import "./followerCard.css";
import data from "../../data/followerList.js";
const followerCard = () => {
  return (
    <div className="followerCard">
      <h3 className="heading"> who is following you! </h3>
      <br/>
      {data.map((item, idx) => {
        return (
         <div key={idx}>
          <div className="follow-people">
            <img
              className="follow-people-image"
              src={item.coverPhoto}
              alt="profile image"
            />
            <div className="user-info">
              <span className="bolder">{item.name}</span>
              <br/>
              <span className="">@{item.username}</span>
            </div>
          </div>
            <div className="button">
            <button className="follow-button">Follow</button>
            <button className="follow-button">Visit</button>
            </div>
            </div>
        );
      })}
    </div>
  );
};

export default followerCard;
