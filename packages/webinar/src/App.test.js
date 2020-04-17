import React from 'react';
import App from './App';
import logo from './logo.svg';

import { render } from '@testing-library/react';

test('Renders react logo', () => {
  const queries = render(<App />);

  const image = queries.getByAltText('logo');
  expect(image).toHaveAttribute('src', logo);
});

test('Renders react docs link', () => {
  const queries = render(<App />);

  const link = queries.getByText('Learn React');
  expect(link).toHaveAttribute('href');
  expect(link).toHaveAttribute('rel');
});