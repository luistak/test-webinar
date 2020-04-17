import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders react logo', () => {
  const queries = render(<App />);

  const image = queries.getByAltText('logo');
  expect(image).toHaveAttribute('src');
});

test('renders learn react link', () => {
  const queries = render(<App />);

  const link = queries.getByText('Learn React');
  expect(link).toHaveAttribute('rel');
  expect(link).toHaveAttribute('href');
});
