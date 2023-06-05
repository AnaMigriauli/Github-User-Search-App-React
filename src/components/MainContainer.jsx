import React from "react";
import darkmode from "../assets/Images/Path.svg";
import searchIcon from "../assets/Images/Combined Shape.svg";
const MainContainer = () => {
  return (
    <div>
      <div>
        <h1>devfinder</h1>
        <button>
          <span>DARK</span>
          <img src={darkmode} alt="dark mode" />
        </button>
      </div>
      <div>
        <img src={searchIcon} alt="search icon" />
        <input />
        <button>Search</button>
      </div>
      <div></div>
    </div>
  );
};
export default MainContainer;
