import React, { useState } from 'react'; // ✅ Added useState
import './Cart.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../Navbar/Navbar';
import Payment from '../Payment/Payment';

function Cart({ cartItems, increaseQty, decreaseQty, removeItem, clearCartItems }) {
  const [showModal, setShowModal] = useState(false); // ✅ State for modal
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceedtoCheckout = () => {
    const confirm = window.confirm("Choose payment method:\nOK = Online\nCancel = Cash on Delivery");

    if (confirm) {
      setShowModal(true); // ✅ Open custom payment modal
    } else {
      alert("✅ Order placed with Cash on Delivery");
    }
  };

  const handlePaymentSuccess = () => {
    alert("🎉 Order Confirmed! Thank you for your payment.");
    setShowModal(false); // close the modal
    clearCartItems();
  };



  return (
    <>
      <div className="cart">
        <Navbar />
        <div className="cart-container">
          <h2>Your Cart Items: </h2>
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is Empty!</p>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Price : ₹{item.price}</p>
                    <div className="quantity-controls">
                      <RemoveIcon onClick={() => decreaseQty(item.id)} />
                      <span>{item.quantity}</span>
                      <AddIcon onClick={() => increaseQty(item.id)} />
                      <DeleteIcon onClick={() => removeItem(item.id)} className="delete-icon" />
                    </div>
                    <p>Subtotal: ₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
              <hr />
              <div className="cart-total">
                <h3>Total: ₹{getTotalPrice()}</h3>
                <button className="checkout-btn" onClick={handleProceedtoCheckout}>Proceed to Checkout</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Payment Modal at the bottom level of JSX */}
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


