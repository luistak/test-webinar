import React from 'react';
import ReactDOM from 'react-dom';
import { getQueriesForElement } from '@testing-library/dom';

import LogoImage from  '../logo.svg';
import App from '..';

const render = (Ui) => {
  const container  = document.createElement('div');

  ReactDOM.render(Ui, container);

  const queries = getQueriesForElement(container);

  return {
    container,
    ...queries
  }
}

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
