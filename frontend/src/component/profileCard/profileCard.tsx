import "./profileCard.css";
import Profile from "./coverPhoto.jpg";
import Cover from "./profile.jpeg";
const profileCard = () => {
  return (
    <div className="profileCard">
      <div className="profileImage">
        <img alt="cover image" src={Cover} className="cover" />
        <img alt="profile image" src={Profile} className="profile" />
      </div>
      <div className="profileName">
        <span className="">Maneesh Shah</span>
        <span className=""> software engineer</span>
      </div>
        <hr />
      <div className="followingStatus">
        <div className="follower">
          <span className="boldSpan">8,834</span>
          <span> following</span>
        </div>
        <div />
        <div className="following">
          <span className="boldSpan">8,834</span>
          <span> follower</span>
        </div>
      </div>
        <hr />
        <div className="myProfile">My Profile</div>
        <hr />
    </div>
  );
};

export default profileCard;
