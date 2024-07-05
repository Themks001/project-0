import { useState } from "react";
import {NavbarContext, DarkModeContext } from "./context/navbarContext.js"
import "./style/app.css";
import Profile from "./pages/profile/profile.tsx"
import Home from "./pages/home/home.tsx";
import Auth from "./pages/auth/auth.tsx"
const App = () => {
  const [isshown, setisshown] = useState(true);
  const [DarkMode, setDarkMode] = useState(false);
  return (
    <>
    <NavbarContext.Provider value={{isshown, setisshown}}>
    <DarkModeContext.Provider value={{DarkMode, setDarkMode}}>
      <div className="app">
        <div className="blur" style={{background:DarkMode ?'none':'#f10656', color: DarkMode?'white':"black"}}></div>
        <div className="blur" style={{background:DarkMode ?'none':'#f10656', color: DarkMode?'white':"black"}}></div>
        <div className="blur" style={{background:DarkMode ?'none':'#f10656', color: DarkMode?'white':"black"}}></div>
        {/*
        <Home style={{background:DarkMode ?'rgba(0,0,0,.8)':'rgba(255,255,255,.8)', color: DarkMode?'white':"black"}}/>
        <Profile/>
        */}
        <Auth/>
      </div>
    </DarkModeContext.Provider>
    </NavbarContext.Provider>
    </>
  );
};

export default App;
