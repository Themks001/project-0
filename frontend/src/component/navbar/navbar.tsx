import { useContext } from "react";
import { NavbarContext, DarkModeContext } from "../../context/navbarContext.js";
import "./navbar.css";
import logo from "./neonM.jpeg";
import {
  Home,
  Settings,
  BadgeHelp,
  Menu,
  Sun,
  Moon,
  Bell,
  LogOut,
  MessageCircleCode,
  X,
  Users
} from "lucide-react";
const navbar = () => {
  const bottomNavItem = [
    {
      name: "help",
      location: "/",
      icon: BadgeHelp
    },
    {
      name: "logout",
      location: "/",
      icon: LogOut
    }
  ];
  const hashtags = ["cars", "bike", "sprots", "games", "dance", "music"];
  const menubarList = [
    {
      name: "Home",
      location: "/",
      icon: Home
    },
    {
      name: "Setting",
      location: "/",
      icon: Settings
    },
    {
      name: "Messages",
      location: "/",
      icon: MessageCircleCode
    },
    {
      name: "Accounts",
      location: "/",
      icon: Users
    },
    {
      name: "Notice",
      location: "/",
      icon: Bell
    }
  ];
  const { isshown, setisshown } = useContext(NavbarContext);
  const { DarkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      {isshown && (
        <div className="company-logo">
          <div className="cross-bar">
            <X onClick={() => setisshown(false)} />
          </div>
          <div className="user-image">
            <img src={logo} alt="logo" className="company-logo-image" />
            <h4>TheMks </h4>
          </div>
        </div>
      )}
      {!isshown && (
        <Menu
          onClick={() => {
            setisshown(true);
           
          }}
        />
      )}
      <ul className="menubar">
        {isshown && <span className="light">navigation</span>}
        {menubarList.map((item, idx) => {
          return (
            <li key={idx} className="menu-list">
              <a
                href={item.location}
                style={{ color: DarkMode ? "white" : "black" }}
                className="menu-list-item"
              >
                {isshown && <span>{item.name}</span>}
                <span>
                  <item.icon />
                </span>
              </a>
            </li>
          );
        })}
        {DarkMode && (
          <li className="menu-list">
            <div className="menu-list-item" onClick={() => setDarkMode(false)}>
              <span>light theme</span>
              <span>
                <Sun />
              </span>
            </div>
          </li>
        )}
        {!DarkMode && (
          <li className="menu-list">
            <div className="menu-list-item" onClick={() => setDarkMode(true)}>
              <span>Dark theme</span>
              <span>
                <Moon />
              </span>
            </div>
          </li>
        )}
      </ul>
      {isshown && (
        <ul className="trending-trends">
          <span className="light">trends</span>
          {hashtags.map((item, idx) => {
            return (
              <li className="menu-list trends-item" key={idx}>
                #{item}
              </li>
            );
          })}
        </ul>
      )}
      <ul className="bottom-nav">
        {bottomNavItem.map((item, idx) => {
          return (
            <li className="menu-list" key={idx}>
              <a
                href={item.location}
                style={{ color: DarkMode ? "white" : "black" }}
                className="menu-list-item"
              >
                {isshown && <span>{item.name}</span>}
                <span>
                  <item.icon />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default navbar;
