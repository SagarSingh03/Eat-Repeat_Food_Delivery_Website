import React, { useState } from "react";
import "./Payment.css";
import { toast } from "react-toastify";

function Payment({ onSuccess, onClose, amount = 500 }) {
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [password, setPassword] = useState("");
  const [cvv, setCvv] = useState("");

  // 🔐 Basic Validation Payment
  const handleFakePayment = () => {
    if (phone && cardNumber.length >= 12 && password && cvv.length === 3) {
      toast.success("Payment Successful 🎉");
      onSuccess();
      onClose();
    } else {
      toast.error("Invalid Details ❌");
    }
  };

  // 💳 Razorpay Integration
  const handleRazorpay = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // 🔴 Replace this
      amount: amount * 100, // in paise
      currency: "INR",
      name: "Food Delivery App",
      description: "Order Payment",
      handler: function (response) {
        toast.success("Payment Successful 🎉");
        onSuccess();
        onClose();
      },
      prefill: {
        contact: phone,
      },
      theme: {
        color: "#ff6b2c",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="payment-method">
      <div className="payment-modal">
        <h2>Complete Your Payment 🍔</h2>

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          placeholder="CVV"
          maxLength={3}
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />

        <button onClick={handleFakePayment}>
          Pay ₹{amount} (Test)
        </button>

        <button onClick={handleRazorpay}>
          Pay with Razorpay 💳
        </button>

        <button onClick={onClose} className="cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Payment;