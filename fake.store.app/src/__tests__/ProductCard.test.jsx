// src: src/__test__/ProductCard.test.jsx

import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

test('renders product name', () => {
  const product = { id: 1, name: 'Test Product' };
  render(<ProductCard product={product} onAddToCart={() => {}} />);
  expect(screen.getByText(/test product/i)).toBeInTheDocument();
});

test('calls onAddToCart with product when button is clicked', () => {
  const product = { id: 1, name: 'Test Product' };
  const mockFn = vi.fn();
  render(<ProductCard product={product} onAddToCart={mockFn} />);
  fireEvent.click(screen.getByText(/add to cart/i));
  expect(mockFn).toHaveBeenCalledWith(product);
});
