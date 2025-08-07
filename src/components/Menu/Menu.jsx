import React, { useState } from 'react';
import './Menu.css';
import { food_list, menu_list } from '../../assets/Data';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Rating from '@mui/material/Rating';
import Sorting from '../Sorting/Sorting';
import SearchBar from '../SearchBar/SearchBar';

const Menu = ({ onAddToCart }) => {
  const [count, setCount] = useState({});
  const [category, setCategory] = useState("All");
  const [searchResults, setSearchResults] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);

  // Filter logic
  let filteredItems = food_list;

  if (searchResults.length > 0) {
    filteredItems = searchResults;
  } else if (category !== "All") {
    filteredItems = food_list.filter(item => item.category === category);
  }

  if (sortedItems.length > 0) {
    filteredItems = sortedItems;
  }

  const handleAdd = (item) => {
    setCount((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
    onAddToCart(item);
  };

  const handleRemove = (item) => {
    setCount((prev) => ({
      ...prev,
      [item.id]: prev[item.id] > 0 ? prev[item.id] - 1 : 0,
    }));
  };

  return (
    <div className="menu-container" id="menu">
      <h1 className="menu-title">Our Top Dishes</h1>

      <div className="ExploreMenu">
        <h1>Explore our Menu</h1>
        <strong>Delicious Moments, Delivered.</strong>
        <p>From comfort food to gourmet treats — we bring happiness to your plate, wherever you are.</p>
      </div>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name));
              setSortedItems([]); // reset sorting on category change
              setSearchResults([]); // reset search on category change
            }}
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <div className="filters">
        <Sorting foodItems={filteredItems} setSortedItems={setSortedItems} />
        <SearchBar setCategory={setCategory} setSearchResults={setSearchResults} />
      </div>

      <div className="menu-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">₹{item.price}</p>
              <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <RemoveIcon onClick={() => handleRemove(item)} style={{ cursor: 'pointer' }} />
                <p>Quantity: {count[item.id] || 0}</p>
                <AddIcon onClick={() => handleAdd(item)} style={{ cursor: 'pointer' }} />
                <Rating defaultValue={item.price % 17} />
              </span>
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;


