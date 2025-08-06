import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import { setItem, getItem } from './components/LocalStorage/LocalStorage';

const App = () => {
  const [cartItems, setCartItems] = useState(() => getItem('cart') || []);

  useEffect(() => {
    const stored = getItem('cart');
    if (stored) setCartItems(stored);
  }, []);

  useEffect(() => {
    setItem('cart', cartItems);
  }, [cartItems]);

  const AddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onAddToCart={AddToCart} />} />
        <Route path="/menu" element={<Menu onAddToCart={AddToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
              clearCartItems={() => setCartItems([])}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
