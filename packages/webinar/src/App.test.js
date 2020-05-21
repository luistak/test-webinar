import React from 'react';
import { render } from '@testing-library/react';
import logo from './logo.svg';

import App from './App';

test('renders learn react link', () => {
  const queries = render(<App />);

  const link = queries.getByText('Learn React');
  expect(link).toHaveAttribute('href', 'https://reactjs.org');
})

test('renders react logo', () => {
  const { rerender, queryByAltText, getByAltText } = render(<App />);

  const image = getByAltText('logo');
  expect(image).toHaveAttribute('src', logo);

  rerender(<App shouldShowImage={false} />);

  expect(queryByAltText('logo')).not.toBeInTheDocument();
})