import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container flex items-center justify-between gap-4 px-4 py-8 mx-auto">
      <input
        name="text"
        type="search"
        value={search}
        onChange={handleChange}
        autoComplete="off"
        maxLength={100}
        autoFocus
        placeholder="Search Fruits..."
        className="flex-grow px-4 py-2 border border-gray-500 rounded-lg outline-none"
      />
      <button className="px-4 py-2 text-white rounded bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
        <IoIosSearch className="inline-block mr-2" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
