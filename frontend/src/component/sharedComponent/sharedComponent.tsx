import cover from "./coverPhoto.jpg";
import {DarkModeContext} from "../../context/navbarContext.js"
import { useState, useRef, useContext } from "react";
import "./sharedComponent.css";
import { Camera, X, MapPin, Video, Headphones, Send } from "lucide-react";
const sharedComponent = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);
  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img)
      });
      console.log(image);
    }
  };
  const { DarkMode } = useContext(DarkModeContext);
  return (
    <div
      className="sharedComponentDiv"
      style={{
        background: DarkMode ? "rgba(0,0,0,.2)" : "rgba(255,255,255,.8)",
        color: DarkMode ? "white" : "black"
      }}
    >
      <div className="upper-layer">
        <div className="postImage">
          <img src={cover} alt="profilePic" />
        </div>
        <div className="input-div">
          <input type="text" placeholder="What's in your mind...." />
        </div>
      </div>
      <div className="lower-div-icons" onClick={() => imageRef.current.click()}>
        <div className="icons-div">
          <span className="sharedComponent">
            <Camera />
          </span>
          <span className="sharedComponent">photo</span>
        </div>
        <div className="icons-div">
          <span className="sharedComponent">
            <Video />
          </span>
          <span className="sharedComponent">video</span>
        </div>
        <div className="icons-div">
          <span className="sharedComponent">
            <MapPin />
          </span>
          <span className="sharedComponent">Location</span>
        </div>
        <div className="icons-div">
          <span className="sharedComponent">
            <Headphones />
          </span>
          <span className="sharedComponent">Music</span>
        </div>
        <div className="icons-div">
          <span className="sharedComponent">
            <Send />
          </span>
          <span className="sharedComponent">share</span>
        </div>
        <div style={{ display: "none" }}>
          <input
            type="file"
            ref={imageRef}
            name="myImages"
            onChange={onImageChange}
            id=""
          />
        </div>
      </div>
      <div className="div">
        {image && (
          <div className="selectedImageDiv">
            <X onClick={() => setImage(null)} />
            <img src={image.image} alt="post image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default sharedComponent;
