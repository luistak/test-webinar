import React from 'react';
import { render } from '@testing-library/react';

import LogoImage from  '../logo.svg';
import App from '..';


test('renders react logo', () => {
  const { getByAltText } = render(<App />);

  const image = getByAltText('logo');
  expect(image).toHaveAttribute('src', LogoImage);
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);

  const link = getByText('Learn React');
  expect(link).toHaveAttribute('href');
});
