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

test('renders learn react link with logo', () => {
  const { getByAltText, getByText } = render(<App />);

  const image = getByAltText('logo');
  expect(image).toHaveAttribute('src', LogoImage);

  const link = getByText('Learn React');
  expect(link).toHaveAttribute('href');
});
