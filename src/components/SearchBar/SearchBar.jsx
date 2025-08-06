import React, { useCallback, useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { food_list } from '../../assets/Data.js';


const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

function SearchBar({ setCategory, setSearchResults }) {
  const [query, setQuery] = useState('');

  
  const handleSearch = (value) => {
    if (value.trim() === '') {
      setSearchResults([]); // Reset if empty
      return;
    }

    const filtered = food_list.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filtered);
    setCategory("All");
  };

  const debounceSearch = useCallback(debounce(handleSearch, 500), []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debounceSearch(value);
  };

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
        <SearchIcon className="searchicon" />
      </div>
    </div>
  );
}

export default SearchBar;
