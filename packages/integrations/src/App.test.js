import React from 'react';
import user from '@testing-library/user-event';
import { render, wait } from '@testing-library/react';
import App from './App-02';

import { checkOut } from './api';

jest.mock('./api.js');

test('renders learn react link', async () => {
  window.alert = jest.fn();
  checkOut.mockResolvedValueOnce();

  const { getByText, getAllByTestId, getByLabelText } = render(<App />);

  const homeLink = getByText('Pocket eCommerce');

  expect(homeLink).toBeInTheDocument();

  const items = getAllByTestId('item');
  const firstItem = items[0];

  user.click(firstItem);

  const quantityInput = getByLabelText('Quantity');
  user.type(quantityInput, '5');

  const submitButton = getByText('Add to cart');
  user.click(submitButton);

  const cartButton = getByText(/^cart$/i);
  user.click(cartButton);

  const checkoutButton = getByText('Check Out');
  user.click(checkoutButton);

  await wait(() => {
    expect(checkOut).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalled();
  })

  const homePage = getByText('Items');
  expect(homePage).toBeInTheDocument();
});
