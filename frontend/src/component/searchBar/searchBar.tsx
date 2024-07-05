
import {  Search } from "lucide-react";
import "./searchBar.css";
const searchBar = () => {
  return (
    <div className="logoBar">
        <input className="search-bar-input" placeholder='search...' />
      <div className="search">
        <Search color="#0f8af7e3" size={30} onClick={() => setisShown(p => !p)} />
      </div>
    </div>
  );
};

export default searchBar;
