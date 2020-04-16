import React from 'react';
import { render } from '@testing-library/react';

import App from './App';
import logo from './logo.svg';

test('render a react link', () => {
  const { getByText } = render(<App />);
  const link = getByText('Learn React');
  expect(link).toHaveAttribute('href')
  expect(link).toHaveAttribute('rel')
});

test('render app logo', () => {
  const { getByAltText } = render(<App />);

  const image = getByAltText('logo');
  expect(image).toHaveAttribute('src', logo)

});
