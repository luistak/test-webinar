import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';

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

  const { debug, getByText, getByLabelText } = render(<App />);
  expect(getByText(/pocket ecommerce/i)).toBeInTheDocument();

  const itemLink = getByText(item.name);
  fireEvent.click(itemLink);

  const itemInput = getByLabelText(/quantity/i);
  fireEvent.change(itemInput, { target: { value: 12 }});

  const addToCartButton = getByText(/add to cart/i);
  fireEvent.click(addToCartButton);

  const homeLink = getByText(/pocket ecommerce/i);
  fireEvent.click(homeLink);

  const cartLink = getByText(/cart/i);
  fireEvent.click(cartLink);

  const checkOutButton = getByText(/check out/i);
  fireEvent.click(checkOutButton);

  await wait(() => {
    expect(mockedCheckOut).toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalled()
  })
});
