import React from 'react';
import { render, screen, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as api from './api';

import App from './App';

test('renders learn react link', async () => {
  window.alert = jest.fn();
  jest.spyOn(api, 'checkOut');

  render(<App />);

  const items = screen.getAllByTestId('item');
  const firstItem = items[0];

  userEvent.click(firstItem);

  const itemDetailsPage = screen.queryByTestId('item-details');
  expect(itemDetailsPage).toBeInTheDocument();

  const input = screen.getByLabelText('Quantity');
  userEvent.type(input, '10');

  const button = screen.getByText(/add to cart/i)
  userEvent.click(button);

  const cartLink = screen.getByTestId('cart');
  userEvent.click(cartLink);

  const checkoutButton = screen.getByText(/check out/i)
  userEvent.click(checkoutButton);

  await wait(() => expect(window.alert).toHaveBeenCalled());
  await wait(() => expect(api.checkOut).toHaveBeenCalled());

  const homePage = screen.queryByText(/home/i);
  expect(homePage).toBeInTheDocument();
});
