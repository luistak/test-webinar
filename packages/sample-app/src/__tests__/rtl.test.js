import React from 'react';
import { render } from '@testing-library/react';

import LogoImage from  '../logo.svg';
import App from '../App';

test('renders learn react link with logo', () => {
  const {
    getByText,
    getByAltText,
    // container,
    // debug
  } = render(<App />);

  // console.log(container.innerHTML)
  // debug()

  const image = getByAltText('logo');
  expect(image).toHaveAttribute('src', LogoImage);

  const link = getByText(/learn React/i);
  expect(link).toHaveAttribute('href');
});
