import React from 'react';
import user from '@testing-library/user-event';
import { render, wait } from '@testing-library/react';

import {
  checkOut as mockedCheckOut
} from '../api'

import { mockedItems } from '../mocks';
import App from '../App';

jest.mock('../api')

test('order check out ', async () => {
  const item = mockedItems[0];
  window.alert = jest.fn();
  mockedCheckOut.mockResolvedValueOnce({ success: true });

  const { getByText, getByLabelText } = render(<App />);
  expect(getByText(/pocket ecommerce/i)).toBeInTheDocument();

  const itemLink = getByText(item.name);
  user.click(itemLink);

  const itemInput = getByLabelText(/quantity/i);
  user.type(itemInput, '12');

  const addToCartButton = getByText(/add to cart/i);
  user.click(addToCartButton);

  const homeLink = getByText(/pocket ecommerce/i);
  user.click(homeLink);

  const cartLink = getByText(/cart/i);
  user.click(cartLink);

  const checkOutButton = getByText(/check out/i);
  user.click(checkOutButton);

  await wait(() => {
    expect(mockedCheckOut).toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalled()
  })
});
