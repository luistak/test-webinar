import React from 'react';
import { render, waitFor, waitForElement } from '@testing-library/react';

import {
  checkOut as mockedCheckOut,
  fetchItems as mockedFetchItems
} from '../api'

import { mockedRawItems } from './mocks';
import App from '../App';
import { act } from 'react-dom/test-utils';

jest.mock('../api')

beforeAll(() => {
  mockedFetchItems.mockResolvedValueOnce(mockedRawItems)
  mockedCheckOut.mockResolvedValueOnce({ success: true })
})


test('renders learn react link', async () => {
  const { debug, getByText, findByText } = render(<App />);

  debug()

  expect(getByText('Loading...')).toBeInTheDocument();
  expect(mockedFetchItems).toHaveBeenCalled();

  debug()
  const bla = await waitForElement(async () => await findByText('Pocket eCommerce'))
  // expect(await f).toBeInTheDocument();;
  console.log({ bla });
  debug()
});
