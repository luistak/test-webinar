import React from 'react';
import user from '@testing-library/user-event';
import { render, screen, wait } from '@testing-library/react';

import {
  checkOut as mockedCheckOut
} from '../api'

/**
 * Change between these two imports
 */
import App from '../App';
// import App from '../App-02';

jest.mock('../api')

test('order check out ', async () => {
  window.alert = jest.fn();
  mockedCheckOut.mockResolvedValueOnce({ success: true });

  render(<App />);

  // Assert initial page
  const heading = screen.getByRole('heading',{ name: /items/i });
  expect(heading).toBeInTheDocument();

  // Find and navigate do first item details
  const items = screen.getAllByTestId('item');
  const firstItem = items[0];
  expect(firstItem).toBeInTheDocument();

  user.click(firstItem);

    // Add item to cart
  const itemInput = await screen.findByLabelText(/quantity/i);
  user.type(itemInput, '12');

  const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
  user.click(addToCartButton);

  // Go to Cart
  const cartLink = screen.getByText('Cart');
  user.click(cartLink);

  // Checkout
  const checkOutButton = await screen.findByText(/check out/i);
  expect(checkOutButton).toBeInTheDocument();
  user.click(checkOutButton);

  await wait(() => expect(mockedCheckOut).toHaveBeenCalled());
  await wait(() => expect(window.alert).toHaveBeenCalledWith('Order created successfully!'));

  // Assert initial page redirect
  expect(await screen.findByRole('heading',{ name: /items/i })).toBeInTheDocument();
});
