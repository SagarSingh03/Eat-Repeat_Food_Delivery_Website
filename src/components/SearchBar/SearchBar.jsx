import React, { useState, useRef, useEffect } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { food_list } from "../../assets/foodData";

function SearchBar({ setSearchResults }) {
  const [query, setQuery] = useState('');
  const timerRef = useRef(null);

  const handleSearch = (value) => {
    if (value.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = food_list.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filtered);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      handleSearch(value);
    }, 500);
  };

  const handleIconClick = () => {
    clearTimeout(timerRef.current);
    handleSearch(query);
  };

  
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="SearchBar">
      <strong>SEARCH FOOD ITEMS</strong>
      <br />
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search Items..."
          value={query}
          onChange={handleChange}
        />
        <SearchIcon className="searchicon" onClick={handleIconClick} />
      </div>
    </div>
  );
}

export default SearchBar;