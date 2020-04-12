import React from 'react';
import ReactDOM from 'react-dom';
import { getQueriesForElement } from '@testing-library/dom';

import LogoImage from  '../logo.svg';
import App from '../App';

test('renders learn react link with logo', () => {
  const div  = document.createElement('div');

  ReactDOM.render(<App />, div);

  const queries = getQueriesForElement(div);
  // console.log(queries);

  const image = queries.getByAltText('logo');
  expect(image).toHaveAttribute('src', LogoImage);

  const link = queries.getByText('Learn React');
  expect(link).toHaveAttribute('href');
});
