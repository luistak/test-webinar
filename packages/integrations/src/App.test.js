import React from 'react';
import { render, wait } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from './App';
import { checkOut as mockedCheckOut } from './api';

jest.mock('./api')

test('renders learn react link', async () => {
  window.alert = jest.fn();
  mockedCheckOut.mockResolvedValueOnce();

  const screen = render(<App />);

  let homeTitle = queryByText(/^items$/i);
  expect(homeTitle).toBeInTheDocument();

  const items = getAllByTestId('item');
  const firstiTem = items[0];

  user.click(firstiTem);

  const quantityInput = getByLabelText('Quantity');

  user.type(quantityInput, '12');

  const addToCartButton = getByText('Add to cart');

  user.click(addToCartButton);

  const cartLink = getByText('Cart');
  user.click(cartLink);

  const checkoutButton = getByText('Check Out');
  user.click(checkoutButton);

  await wait(() => {
    expect(window.alert).toHaveBeenCalled();
    expect(mockedCheckOut).toHaveBeenCalled();
  })

  homeTitle = queryByText(/^items$/i);
  expect(homeTitle).toBeInTheDocument();
});
