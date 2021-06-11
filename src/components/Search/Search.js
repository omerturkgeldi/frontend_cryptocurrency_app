import React from "react";
import "./Search.css";

const Search = ({ handleChange }) => {
  return (
    <div>
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
