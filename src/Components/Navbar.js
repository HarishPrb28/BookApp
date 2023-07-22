import React, { useState } from "react";
import logo from "../Images/logo.png";
import logoName from "../Images/KeazoNBOOKS.png";
import searchIcon from "../Images/ant-design_search-outlined.png";
import bookMark from "../Images/bx_bx-book-heart.png";
import notification from "../Images/ic_round-notifications-none.png";
import profile from "../Images/IMG20210528181544.png";
import stone from "../Images/fluent_premium-person-20-regular.png";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ query });
  };
  return (
    <nav className="navbar">
      <div className="log-div">
        <img src={logo} alt="log" className="log image-nav" />
        <img src={logoName} alt="log-name" className="log-name image-nav" />
      </div>
      {/* <SearchBar onSearch2 ={onSearch}/> */}
      <form className="searchbar-div" onSubmit={handleSearch}>
        <div className="search-bar">
          <img src={searchIcon} alt="search" className="search-icon-img" />
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
            placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
          />
        </div>
        <div className="search-button">
          <button className="search-btn">Search</button>
        </div>
      </form>
      <div className="icons-div">
        <div className="icon-div icon-div-1">
          <img src={bookMark} alt="book" className="book image-nav" />
        </div>
        <div className="icon-div icon-div-2">
          <img
            src={notification}
            alt="notification"
            className="bell image-nav"
          />
        </div>
        <div className="icon-div icon-div-3">
          <img src={stone} alt="pro" className="pro image-nav" />
        </div>
        <div className="icon-div icon-div-4">
          <img src={profile} alt="profile" className="profile image-nav" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
