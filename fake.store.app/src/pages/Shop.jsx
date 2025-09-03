// src src/pages/Shop.jsx

import { useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [cart, setCart] = useState([]);
  const product = { id: 1, name: 'Test Product' };

  const addToCart = (p) => setCart([...cart, p]);

  return (
    <div>
      <ProductCard product={product} onAddToCart={addToCart} />
      <div data-testid="cart-count">Cart Items: {cart.length}</div>
    </div>
  );
}
