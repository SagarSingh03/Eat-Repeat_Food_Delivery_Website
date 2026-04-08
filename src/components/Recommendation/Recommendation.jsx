import React from "react";
import "./Recommendation.css";

function Recommendation({ items, addToCart }) {
    return (
        <div className="recommendation">
            <h2>🔥 Recommended for you</h2>

            <div className="recommendation-list">
                {items.map((item) => (
                    <div key={item.id} className="recommendation-card">
                        <img src={item.image} alt={item.name} />
                        <h4>{item.name}</h4>
                        <p>₹{item.price}</p>

                        <button onClick={() => addToCart(item)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recommendation;