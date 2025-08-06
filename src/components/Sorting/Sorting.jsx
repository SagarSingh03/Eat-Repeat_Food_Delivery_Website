import React, { useState } from 'react';
import './Sorting.css';

function Sorting({ foodItems, setSortedItems }) {
  const [sortOrder, setSortOrder] = useState("Low to High");

  const handleChange = (e) => {
    const selectedOrder = e.target.value;
    setSortOrder(selectedOrder);

    const sorted = [...foodItems].sort((a, b) => {
      if (selectedOrder === "Low to High") return a.price - b.price;
      else return b.price - a.price;
    });

    setSortedItems(sorted);
  };

  return (
    <div className="sorting">
      <strong>SORT BY PRICE</strong>
      <p>RELEVANCE</p>
      <label>
        <input
          type="radio"
          className="radio"
          name="price-sort"
          value="Low to High"
          checked={sortOrder === "Low to High"}
          onChange={handleChange}
        />
        Low to High
      </label>
      <br />
      <label>
        <input
          type="radio"
          className="radio"
          name="price-sort"
          value="High to Low"
          checked={sortOrder === "High to Low"}
          onChange={handleChange}
        />
        High to Low
      </label>
    </div>
  );
}

export default Sorting;

