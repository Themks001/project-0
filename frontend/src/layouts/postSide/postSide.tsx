import "./postSide.css";
import { useContext } from "react";
import { DarkModeContext } from "../../context/navbarContext.js";
import Post from "../../component/post/post.tsx";
import SharedComponent from "../../component/sharedComponent/sharedComponent.tsx";
const postSide = () => {
  const { DarkMode } = useContext(DarkModeContext);
  return (
    <div className="postSide" style={{background:DarkMode?"rgba(0,0,0,.4)":"rgba(255,255,255,.4)", color: DarkMode ? "white" : "black" }}>
      <SharedComponent />
      <Post />
    </div>
  );
};

export default postSide;
