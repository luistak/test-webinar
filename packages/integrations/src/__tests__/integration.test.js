import React from 'react';
import user from '@testing-library/user-event';
import { render, wait } from '@testing-library/react';

import {
  checkOut as mockedCheckOut
} from '../api'

/**
 * Change between these two imports
 */
// import App from '../App';
import App from '../App-02';

jest.mock('../api')

test('order check out ', async () => {
  window.alert = jest.fn();
  mockedCheckOut.mockResolvedValueOnce({ success: true });

  const { getByText, findByText, findByLabelText, getAllByTestId } = render(<App />);
  expect(getByText('Items')).toBeInTheDocument();

  const items = getAllByTestId('item');
  const firstItem = items[0];
  user.click(firstItem);

  const itemInput = await findByLabelText(/quantity/i);
  user.type(itemInput, '12');

  const addToCartButton = getByText(/add to cart/i);
  user.click(addToCartButton);

  const cartLink = getByText('Cart');
  user.click(cartLink);

  const checkOutButton = await findByText(/check out/i);
  user.click(checkOutButton);

  await wait(() => {
    expect(mockedCheckOut).toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalled()
  })

  await findByText('Items');
});
