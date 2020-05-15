import React from "react";
import "./searchBox.css";
const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input type="search" placeholder="Search" onChange={searchChange} />
      <i class="fas fa-search"></i>
    </div>
  );
};
export default SearchBox;
