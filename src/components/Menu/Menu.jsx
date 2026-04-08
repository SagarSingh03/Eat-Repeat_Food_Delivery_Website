import React, { useState } from 'react';
import './Menu.css';

import { food_list, menu_list } from "../../assets/foodData";
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

  
  let filteredItems = [...food_list];

  
  if (category !== "All") {
    filteredItems = filteredItems.filter(item => item.category === category);
  }

  
  if (searchResults.length > 0) {
    filteredItems = searchResults;
  }

  
  if (sortedItems.length > 0) {
    filteredItems = sortedItems;
  }

  const handleAdd = (item) => {
    setCount(prev => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
    onAddToCart(item);
  };

  const handleRemove = (item) => {
    setCount(prev => ({
      ...prev,
      [item.id]: prev[item.id] > 0 ? prev[item.id] - 1 : 0
    }));
  };

  return (
    <div className="menu-container" id="menu">
      <h1 className="menu-title">Our Top Dishes</h1>

      <div className="ExploreMenu">
        <h1>Explore our Menu</h1>
        <strong>Delicious Moments, Delivered.</strong>
        <p>
          From comfort food to gourmet treats — we bring happiness to your plate, wherever you are.
        </p>
      </div>

      {/* ✅ CATEGORY */}
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="menu-category-item"
            onClick={() => {
              setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name));
              setSortedItems([]);     // reset sorting
              setSearchResults([]);   // reset search
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

      {/* ✅ FILTERS */}
      <div className="filters">
        <Sorting
          foodItems={filteredItems}
          setSortedItems={setSortedItems}
        />

        <SearchBar
          setCategory={setCategory}
          setSearchResults={(results) => {
            setSearchResults(results);
            setSortedItems([]); // 🔥 reset sorting when searching
          }}
        />
      </div>

      {/* ✅ MENU GRID */}
      <div className="menu-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div className="menu-card" key={item.id}>
              <div className="menu-image-wrapper">
                <img src={item.image} alt={item.name} className="menu-image" />
              </div>

              <div className="menu-card-body">
                <h3 className="menu-item-name">{item.name}</h3>
                <p className="menu-item-desc">{item.description}</p>
                <p className="price">₹{item.price}</p>

                <div className="card-actions">
                  <div className="quantity-controls">
                    <RemoveIcon
                      className="qty-icon"
                      onClick={() => handleRemove(item)}
                    />
                    <span className="qty-value">{count[item.id] || 0}</span>
                    <AddIcon
                      className="qty-icon"
                      onClick={() => handleAdd(item)}
                    />
                  </div>

                  <Rating
                    name={`rating-${item.id}`}
                    defaultValue={4}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No items found for your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;