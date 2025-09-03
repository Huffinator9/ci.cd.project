// src: src/__test__/Button.test.jsx

import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

test('renders button with label', () => {
  render(<Button label="Click me" />);
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = vi.fn();
  render(<Button label="Click me" onClick={handleClick} />);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
