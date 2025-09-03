// src: src/__test__/Shop.test.jsx

import { render, screen, fireEvent } from '@testing-library/react';
import Shop from '../pages/Shop';

test('cart updates when product is added', () => {
  render(<Shop />);
  const button = screen.getByText(/add to cart/i);
  const cartCount = screen.getByTestId('cart-count');

  expect(cartCount).toHaveTextContent('Cart Items: 0');

  fireEvent.click(button);

  expect(cartCount).toHaveTextContent('Cart Items: 1');
});
