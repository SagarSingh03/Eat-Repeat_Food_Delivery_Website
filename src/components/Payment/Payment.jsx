import React, { useState } from 'react'
import './Payment.css'

function Payment({ onSuccess, onClose }) {
    const [phone, setPhone] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [password, setPassword] = useState("");
    const [cvv, setCvv] = useState("");

    const handlePayment = () => {
        if (phone && password && cvv.length === 3) {
            alert("Payment is Successful!");
            onSuccess();
            onclose();
        } else {
            alert("Invalid Details. Payment Failed");
        }
    };

    return (
        <div className="payment-method">
            <div className="payment-modal">
                <h2>Make Payment and Get Your Items! </h2>
                <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="number" placeholder="card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="number" placeholder="CVV" maxLength={3} onChange={(e) => setCvv(e.target.value)} />
                <button onClick={handlePayment}>Pay {Payment}</button>
                <button onClick={onClose} className="cancel-btn">Cancel</button>
            </div>
        </div>
    )
}

export default Payment
