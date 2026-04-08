import React, { useState } from 'react';
import './Cart.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../Navbar/Navbar';
import Payment from '../Payment/Payment';


import Recommendation from '../Recommendation/Recommendation';
import { getRecommendations } from '../../utils/recommendation';
import foodData from '../../assets/foodData'; // make sure this exists

function Cart({ cartItems, increaseQty, decreaseQty, removeItem, clearCartItems, addToCart }) {
  const [showModal, setShowModal] = useState(false);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };


  const recommendedItems = getRecommendations(cartItems, foodData);

  const handleProceedtoCheckout = () => {
    const confirm = window.confirm("Choose payment method:\nOK = Online\nCancel = Cash on Delivery");

    if (confirm) {
      setShowModal(true);
    } else {
      alert("✅ Order placed with Cash on Delivery");
      clearCartItems();
    }
  };

  const handlePaymentSuccess = () => {
    alert("🎉 Order Confirmed! Thank you for your payment.");
    setShowModal(false);
    clearCartItems();
  };

  return (
    <>
      <div className="cart">
        <Navbar />

        <div className="cart-container">
          <h2>Your Cart</h2>

          {cartItems.length === 0 ? (
            <p className="empty-cart">🛒 Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />

                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="price">₹{item.price}</p>

                      <div className="quantity-controls">
                        <button onClick={() => decreaseQty(item.id)}>
                          <RemoveIcon />
                        </button>

                        <span>{item.quantity}</span>

                        <button onClick={() => increaseQty(item.id)}>
                          <AddIcon />
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() => removeItem(item.id)}
                        >
                          <DeleteIcon />
                        </button>
                      </div>

                      <p className="subtotal">
                        Subtotal: ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/*AI RECOMMENDATION */}
              <div className="recommendation-section">
                <p style={{ marginTop: "20px", fontWeight: "500" }}>
                  💡 Recommendations based on your cart
                </p>

                <Recommendation
                  items={recommendedItems}
                  addToCart={addToCart}
                />
              </div>

              {/* SMART UX (FREE DELIVERY TRIGGER) */}
              {getTotalPrice() < 500 && (
                <p style={{ marginTop: "10px", color: "green" }}>
                  Add ₹{500 - getTotalPrice()} more for FREE delivery 🚀
                </p>
              )}

              <div className="cart-total">
                <h3>Total: ₹{getTotalPrice()}</h3>

                <button
                  className="checkout-btn"
                  onClick={handleProceedtoCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {showModal && (
        <Payment
          onClose={() => setShowModal(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </>
  );
}

export default Cart;
